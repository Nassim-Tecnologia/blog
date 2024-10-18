const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { Feed } = require('feed');
const toml = require('toml');

// Load authors from authors.toml
const loadAuthors = () => {
    const authorsPath = path.join(process.cwd(), 'authors.toml');
    const fileContents = fs.readFileSync(authorsPath, 'utf8');
    return toml.parse(fileContents);
};

// Placeholder for read time calculation
const calculateReadTime = (content) => {
    // TODO: Implement read time calculation
};

// Translations for feed titles and descriptions
const translations = {
    en: {
        authorFeedTitle: (name) => `Nassim Blog RSS Feed - EN - ${name}`,
        authorFeedDescription: (name) => `Stay updated with the latest blog posts from ${name}.`,
        categoryFeedTitle: (category) => `Nassim Blog RSS Feed - Category: ${category} - EN`,
        categoryFeedDescription: (category) => `Latest posts in the "${category}" category.`,
        anyFeedTitle: `Nassim Blog RSS Feed - EN`,
        anyFeedDescription: `Stay updated with the latest blog posts from all authors and categories.`,
    },
    pt: {
        authorFeedTitle: (name) => `Nassim Blog RSS Feed - PT - ${name}`,
        authorFeedDescription: (name) => `Fique atualizado com os últimos posts do blog de ${name}.`,
        categoryFeedTitle: (category) => `Nassim Blog RSS Feed - Categoria: ${category} - PT`,
        categoryFeedDescription: (category) => `Últimos posts na categoria "${category}".`,
        anyFeedTitle: `Nassim Blog RSS Feed - PT`,
        anyFeedDescription: `Fique atualizado com os últimos posts do blog de todos os autores e categorias.`,
    },
};

// Helper function to create Feed instance
const createFeed = (language, filterType, filter, site_url, rssLink) => {
    let title, description, authorInfo;

    if (filterType === 'author') {
        title = translations[language].authorFeedTitle(filter.name);
        description = translations[language].authorFeedDescription(filter.name);
        authorInfo = {
            name: filter.name,
            email: filter.contacts.email,
            link: site_url,
        };
    } else if (filterType === 'category') {
        title = translations[language].categoryFeedTitle(filter);
        description = translations[language].categoryFeedDescription(filter);
        authorInfo = {
            name: "Nassim Blog",
            email: "contact@nassim.com",
            link: site_url,
        };
    } else if (filterType === 'any') {
        title = translations[language].anyFeedTitle;
        description = translations[language].anyFeedDescription;
        authorInfo = {
            name: "Nassim Blog",
            email: "contact@nassim.com",
            link: site_url,
        };
    }

    return new Feed({
        title: title,
        description: description,
        id: site_url,
        link: site_url,
        language: language,
        image: `${site_url}/logo.jpeg`,
        favicon: `${site_url}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        updated: new Date(),
        generator: "Feed for Node.js",
        feedLinks: {
            rss: rssLink, // Set RSS link here
        },
        author: authorInfo,
    });
};

// Function to generate RSS feeds
const generateRSS = () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const languages = ["en", "pt"];
    const site_url = "https://github.com/Nassim-Tecnologia/blog";
    const authors = loadAuthors();

    languages.forEach((language) => {
        const langDir = path.join(postsDirectory, language);
        if (!fs.existsSync(langDir)) {
            console.warn(`Language directory not found: ${langDir}`);
            return;
        }

        const filenames = fs.readdirSync(langDir).filter(file => file.endsWith('.md'));

        // Collect unique categories
        const categoriesSet = new Set();

        filenames.forEach((filename) => {
            const filePath = path.join(langDir, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContents);
            if (data.categories && Array.isArray(data.categories)) {
                data.categories.forEach(category => categoriesSet.add(category));
            }
        });

        const categories = Array.from(categoriesSet);

        // Generate feeds per author
        Object.keys(authors).forEach((authorId) => {
            const author = authors[authorId];
            const rssLink = `${site_url}/feeds/${language}/author/${authorId}/latest-feed.xml`;
            const feed = createFeed(language, 'author', author, site_url, rssLink);
            // Removed the redundant line below to prevent TypeError
            // feed.feedLinks.rss = rssLink;

            filenames.forEach((filename) => {
                const slug = filename.replace(/\.md$/, '');
                const filePath = path.join(langDir, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContents);

                if (data.author !== authorId) return; // Skip posts not by this author

                feed.addItem({
                    title: data.title,
                    id: `${site_url}/posts/${language}/${slug}`,
                    link: `${site_url}/posts/${language}/${slug}`,
                    description: data.description || content.slice(0, 200),
                    content: content,
                    author: [
                        {
                            name: author.name,
                            email: author.contacts.email || "sophia@example.com",
                            link: site_url,
                        },
                    ],
                    date: new Date(data.date), // Retain standard date format
                    customFields: {
                        unixTimestamp: new Date(data.date).getTime(),
                    },
                });
            });

            // Generate versioned feed
            const xml = feed.rss2();
            const unixTimestamp = Date.now(); // Use Unix timestamp for filenames
            const versionedFilename = `${unixTimestamp}-feed.xml`;
            const latestFilename = `latest-feed.xml`;
            const outputPath = path.join(process.cwd(), 'feeds', language, 'author', authorId); // Folder structure

            if (!fs.existsSync(outputPath)) {
                fs.mkdirSync(outputPath, { recursive: true }); // Ensure directory exists
            }

            try {
                fs.writeFileSync(path.join(outputPath, versionedFilename), xml, 'utf8');
                fs.writeFileSync(path.join(outputPath, latestFilename), xml, 'utf8');
                console.log(`RSS feed generated successfully at feeds/${language}/author/${authorId}/${versionedFilename} and feeds/${language}/author/${authorId}/${latestFilename}`);
            } catch (error) {
                console.error(`Failed to write RSS feed files for author ${authorId} and language ${language}: ${error.message}`);
            }
        });

        // Generate feeds per category
        categories.forEach((category) => {
            const encodedCategory = encodeURIComponent(category);
            const rssLink = `${site_url}/feeds/${language}/category/${encodedCategory}/latest-feed.xml`;
            const feed = createFeed(language, 'category', category, site_url, rssLink);
            // Removed the redundant line below to prevent TypeError
            // feed.feedLinks.rss = rssLink;

            filenames.forEach((filename) => {
                const slug = filename.replace(/\.md$/, '');
                const filePath = path.join(langDir, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContents);

                if (!data.categories || !Array.isArray(data.categories) || !data.categories.includes(category)) return; // Skip posts not in this category

                const author = authors[data.author];
                if (!author) {
                    console.warn(`Author not found for post: ${filename}`);
                    return;
                }

                feed.addItem({
                    title: data.title,
                    id: `${site_url}/posts/${language}/${slug}`,
                    link: `${site_url}/posts/${language}/${slug}`,
                    description: data.description || content.slice(0, 200),
                    content: content,
                    author: [
                        {
                            name: author.name,
                            email: author.contacts.email || "sophia@example.com",
                            link: site_url,
                        },
                    ],
                    date: new Date(data.date), // Retain standard date format
                    customFields: {
                        unixTimestamp: new Date(data.date).getTime(),
                    },
                });
            });

            // Generate versioned feed
            const xml = feed.rss2();
            const unixTimestamp = Date.now(); // Use Unix timestamp for filenames
            const versionedFilename = `${unixTimestamp}-feed.xml`;
            const latestFilename = `latest-feed.xml`;
            const outputPath = path.join(process.cwd(), 'feeds', language, 'category', category); // Folder structure

            if (!fs.existsSync(outputPath)) {
                fs.mkdirSync(outputPath, { recursive: true }); // Ensure directory exists
            }

            try {
                fs.writeFileSync(path.join(outputPath, versionedFilename), xml, 'utf8');
                fs.writeFileSync(path.join(outputPath, latestFilename), xml, 'utf8');
                console.log(`RSS feed generated successfully at feeds/${language}/category/${category}/${versionedFilename} and feeds/${language}/category/${category}/${latestFilename}`);
            } catch (error) {
                console.error(`Failed to write RSS feed files for category "${category}" and language ${language}: ${error.message}`);
            }
        });

        // Generate 'any' feed (combined feed for all authors and categories)
        const anyFeed = createFeed(language, 'any', 'any', site_url, `${site_url}/feeds/${language}/any/latest-feed.xml`);
        // Removed the redundant line below to prevent TypeError
        // anyFeed.feedLinks.rss = `${site_url}/feeds/${language}/any/latest-feed.xml`;

        filenames.forEach((filename) => {
            const slug = filename.replace(/\.md$/, '');
            const filePath = path.join(langDir, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);
            const author = authors[data.author];

            if (!author) {
                console.warn(`Author not found for post: ${filename}`);
                return;
            }

            anyFeed.addItem({
                title: data.title,
                id: `${site_url}/posts/${language}/${slug}`,
                link: `${site_url}/posts/${language}/${slug}`,
                description: data.description || content.slice(0, 200),
                content: content,
                author: [
                    {
                        name: author.name,
                        email: author.contacts.email || "sophia@example.com",
                        link: site_url,
                    },
                ],
                date: new Date(data.date), // Retain standard date format
                customFields: {
                    unixTimestamp: new Date(data.date).getTime(),
                },
            });
        });

        // Generate versioned 'any' feed
        const anyXml = anyFeed.rss2();
        const anyUnixTimestamp = Date.now(); // Use Unix timestamp for filenames
        const anyVersionedFilename = `${anyUnixTimestamp}-feed.xml`;
        const anyLatestFilename = `latest-feed.xml`;
        const anyOutputPath = path.join(process.cwd(), 'feeds', language, 'any'); // Folder structure

        if (!fs.existsSync(anyOutputPath)) {
            fs.mkdirSync(anyOutputPath, { recursive: true }); // Ensure directory exists
        }

        try {
            fs.writeFileSync(path.join(anyOutputPath, anyVersionedFilename), anyXml, 'utf8');
            fs.writeFileSync(path.join(anyOutputPath, anyLatestFilename), anyXml, 'utf8');
            console.log(`'Any' RSS feed generated successfully at feeds/${language}/any/${anyVersionedFilename} and feeds/${language}/any/${anyLatestFilename}`);
        } catch (error) {
            console.error(`Failed to write 'any' RSS feed files for language ${language}: ${error.message}`);
        }
    });

    // TODO: Implement feed generation by inferred categories
};

// Execute the RSS generation function
generateRSS();
