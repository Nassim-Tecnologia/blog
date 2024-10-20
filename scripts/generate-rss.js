const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { Feed } = require('feed');
const toml = require('toml');

const BUSINESS_NAME = "Nassim";
const BUSINESS_EMAIL = 'thiago.fmartins@outlook.com';
const BUSINESS_CONTENT = 'https://github.com/Nassim-Tecnologia/blog';
const BUSINESS_BLOG = 'https://nassim.com.br/blog';
const BUSINESS_IMAGE = "https://github.com/Nassim-Tecnologia/brand-assets/logo.png";
const BUSINESS_FAVICON = "https://github.com/Nassim-Tecnologia/brand-assets/favicon.ico";

const loadAuthors = () => {
    const authorsPath = path.join(process.cwd(), 'authors.toml');
    try {
        const fileContents = fs.readFileSync(authorsPath, 'utf8');
        return toml.parse(fileContents);
    } catch (error) {
        console.error(`Erro ao ler ${authorsPath}: ${error.message}`);
        process.exit(1);
    }
};

const calculateReadTime = (content) => {
    const wordsPerMinute = 200; // Velocidade média de leitura
    const text = content.replace(/<[^>]+>/g, ''); // Remove tags HTML
    const wordCount = text.split(/\s+/).length;
    const time = Math.ceil(wordCount / wordsPerMinute);
    return time; // minutes
};

const translations = {
    en: {
        authorFeedTitle: (name) => `${BUSINESS_NAME} Blog RSS Feed - EN - ${name}`,
        authorFeedDescription: (name) => `Stay updated with the latest blog posts from ${name}.`,
        categoryFeedTitle: (category) => `${BUSINESS_NAME} Blog RSS Feed - Category: ${category} - EN`,
        categoryFeedDescription: (category) => `Latest posts in the "${category}" category.`,
        anyFeedTitle: `${BUSINESS_NAME} Blog RSS Feed - EN`,
        anyFeedDescription: `Stay updated with the latest blog posts from all authors and categories.`,
    },
    pt: {
        authorFeedTitle: (name) => `${BUSINESS_NAME} Blog RSS Feed - PT - ${name}`,
        authorFeedDescription: (name) => `Fique atualizado com os últimos posts do blog de ${name}.`,
        categoryFeedTitle: (category) => `${BUSINESS_NAME} Blog RSS Feed - Categoria: ${category} - PT`,
        categoryFeedDescription: (category) => `Últimos posts na categoria "${category}".`,
        anyFeedTitle: `${BUSINESS_NAME} Blog RSS Feed - PT`,
        anyFeedDescription: `Fique atualizado com os últimos posts do blog de todos os autores e categorias.`,
    },
};

const createFeed = (language, filterType, filter, site_url, rssLink) => {
    let title, description, authorInfo;

    switch (filterType) {
        case 'author':
            title = translations[language].authorFeedTitle(filter.name);
            description = translations[language].authorFeedDescription(filter.name);
            authorInfo = {
                name: filter.name,
                email: filter.contacts.email,
                link: site_url,
            };
            break;
        case 'category':
            title = translations[language].categoryFeedTitle(filter);
            description = translations[language].categoryFeedDescription(filter);
            authorInfo = {
                name: "Nassim Blog",
                email: BUSINESS_EMAIL,
                link: site_url,
            };
            break;
        case 'any':
            title = translations[language].anyFeedTitle;
            description = translations[language].anyFeedDescription;
            authorInfo = {
                name: "Nassim Blog",
                email: BUSINESS_EMAIL,
                link: site_url,
            };
            break;
        default:
            title = `${BUSINESS_NAME} Blog RSS Feed`;
            description = `Stay updated with the latest blog posts from ${BUSINESS_NAME}.`;
            authorInfo = {
                name: "Nassim Blog",
                email: BUSINESS_EMAIL,
                link: site_url,
            };
            break;
    }

    return new Feed({
        title: title,
        description: description,
        id: site_url,
        link: site_url,
        language: language,
        image: BUSINESS_IMAGE,
        favicon: BUSINESS_FAVICON,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        updated: new Date(),
        generator: "Feed for Node.js",
        feedLinks: {
            rss: rssLink,
        },
        author: authorInfo,
    });
};

const generateRSS = () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const languages = ["en", "pt"];
    const authors = loadAuthors();

    languages.forEach((language) => {
        const langDir = path.join(postsDirectory, language);
        if (!fs.existsSync(langDir)) {
            console.warn(`Diretório de idioma não encontrado: ${langDir}`);
            return;
        }

        const filenames = fs.readdirSync(langDir).filter(file => file.endsWith('.md'));

        // Coleta todas as categorias únicas
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

        // Função para Adicionar Itens ao Feed
        const addItemsToFeed = (feed, filterType, filter) => {
            filenames.forEach((filename) => {
                const slug = filename.replace(/\.md$/, '');
                const filePath = path.join(langDir, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContents);

                // Filtra os posts com base no tipo de filtro
                if (filterType === 'author' && data.author !== filter.id) return;
                if (filterType === 'category' && (!data.categories || !data.categories.includes(filter))) return;

                const author = authors[data.author];
                if (!author) {
                    console.warn(`Autor não encontrado para o post: ${filename}`);
                    return;
                }

                const readTime = calculateReadTime(content);

                feed.addItem({
                    title: data.title, //OK
                    id: `${language}-${slug}`, //OK
                    link: `${BUSINESS_CONTENT}/posts/${language}/${slug}.md`, //OK
                    description: data.description || content.slice(0, 200), //OK
                    image: data.image,
                    author: [
                        {
                            name: author.name, //OK
                            email: author.contacts.email, //OK
                        },
                    ],
                    date: new Date(data.date), //OK
                    category: data.categories ? data.categories.map(category => ({ name: category })) : [],
                    content: JSON.stringify({
                        metadata: {
                            readTime: data.readTime,
                            author: author
                        },
                    }),
                });
            });
        };

        // Geração de Feeds por Autor
        Object.keys(authors).forEach((authorId) => {
            const author = authors[authorId];
            const rssLink = `${BUSINESS_CONTENT}/feeds/${language}/author/${authorId}/latest-feed.xml`;
            const feed = createFeed(language, 'author', author, BUSINESS_CONTENT, rssLink);

            addItemsToFeed(feed, 'author', { id: authorId });

            // Geração do feed versionado
            const xml = feed.rss2();
            const unixTimestamp = Date.now();
            const versionedFilename = `${unixTimestamp}-feed.xml`;
            const latestFilename = `latest-feed.xml`;
            const outputPath = path.join(process.cwd(), 'feeds', language, 'author', authorId);

            if (!fs.existsSync(outputPath)) {
                fs.mkdirSync(outputPath, { recursive: true });
            }

            try {
                fs.writeFileSync(path.join(outputPath, versionedFilename), xml, 'utf8');
                fs.writeFileSync(path.join(outputPath, latestFilename), xml, 'utf8');
                console.log(`RSS feed gerado com sucesso em feeds/${language}/author/${authorId}/${versionedFilename} e feeds/${language}/author/${authorId}/${latestFilename}`);
            } catch (error) {
                console.error(`Falha ao escrever RSS feed para o autor ${authorId} e idioma ${language}: ${error.message}`);
            }
        });

        // Geração de Feeds por Categoria
        categories.forEach((category) => {
            const encodedCategory = encodeURIComponent(category);
            const rssLink = `${BUSINESS_CONTENT}/feeds/${language}/category/${encodedCategory}/latest-feed.xml`;
            const feed = createFeed(language, 'category', category, BUSINESS_CONTENT, rssLink);

            addItemsToFeed(feed, 'category', category);

            // Geração do feed versionado
            const xml = feed.rss2();
            const unixTimestamp = Date.now();
            const versionedFilename = `${unixTimestamp}-feed.xml`;
            const latestFilename = `latest-feed.xml`;
            const outputPath = path.join(process.cwd(), 'feeds', language, 'category', category);

            if (!fs.existsSync(outputPath)) {
                fs.mkdirSync(outputPath, { recursive: true });
            }

            try {
                fs.writeFileSync(path.join(outputPath, versionedFilename), xml, 'utf8');
                fs.writeFileSync(path.join(outputPath, latestFilename), xml, 'utf8');
                console.log(`RSS feed gerado com sucesso em feeds/${language}/category/${category}/${versionedFilename} e feeds/${language}/category/${category}/${latestFilename}`);
            } catch (error) {
                console.error(`Falha ao escrever RSS feed para a categoria "${category}" e idioma ${language}: ${error.message}`);
            }
        });

        // Geração do Feed 'Any' (Combinado para Todos os Autores e Categorias)
        const anyFeed = createFeed(language, 'any', 'any', BUSINESS_CONTENT, `${BUSINESS_CONTENT}/feeds/${language}/any/latest-feed.xml`);

        filenames.forEach((filename) => {
            const slug = filename.replace(/\.md$/, '');
            const filePath = path.join(langDir, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);
            const author = authors[data.author];

            if (!author) {
                console.warn(`Autor não encontrado para o post: ${filename}`);
                return;
            }

            const readTime = calculateReadTime(content);

            anyFeed.addItem({
                title: data.title,
                id: `${language}-${slug}`,
                link: `${BUSINESS_CONTENT}/posts/${language}/${slug}.md`,
                description: data.description || content.slice(0, 200),
                image: data.image,
                author: [
                    {
                        name: author.name,
                        email: author.contacts.email,
                    },
                ],
                date: new Date(data.date), //OK
                category: data.categories ? data.categories.map(category => ({ name: category })) : [],
                content: JSON.stringify({
                    metadata: {
                        readTime: data.readTime,
                        author: author
                    },
                }),
            });
        });

        // Geração do Feed Versionado 'Any'
        const anyXml = anyFeed.rss2();
        const anyUnixTimestamp = Date.now();
        const anyVersionedFilename = `${anyUnixTimestamp} - feed.xml`;
        const anyLatestFilename = `latest-feed.xml`;
        const anyOutputPath = path.join(process.cwd(), 'feeds', language, 'any');

        if (!fs.existsSync(anyOutputPath)) {
            fs.mkdirSync(anyOutputPath, { recursive: true });
        }

        try {
            fs.writeFileSync(path.join(anyOutputPath, anyVersionedFilename), anyXml, 'utf8');
            fs.writeFileSync(path.join(anyOutputPath, anyLatestFilename), anyXml, 'utf8');
            console.log(`'Any' RSS feed gerado com sucesso em feeds / ${language} / any / ${anyVersionedFilename} e feeds / ${language} / any / ${anyLatestFilename} `);
        } catch (error) {
            console.error(`Falha ao escrever 'any' RSS feed para o idioma ${language}: ${error.message} `);
        }
    });

};

generateRSS();
