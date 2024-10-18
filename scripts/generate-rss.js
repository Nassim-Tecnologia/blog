const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { Feed } = require('feed');


const loadAuthors = () => {
    // TODO: function to load Authors data
}
const calulateReadTime = (content) => {
    // TODO: function to calculate readtime
};


// Function to generate RSS feed
const generateRSS = () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));

    const site_url = "https://github.com/Nassim-Tecnologia/blog";

    const feed = new Feed({
        title: "Nassim Blog RSS Feed",
        description: "Stay updated with the latest blog posts from Nassim.",
        id: site_url,
        link: site_url,
        language: "en",
        image: `${site_url}/logo.jpeg`,
        favicon: `${site_url}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        updated: new Date(), // today's date
        generator: "Feed for Node.js",
        feedLinks: {
            rss: `${site_url}/blog/feed.xml`,
        },
        author: {
            name: "Thiago Martins",
            email: "thiago.fmartins@outlook.com",
            link: site_url,
        },
    });

    filenames.forEach((filename) => {
        const slug = filename.replace(/\.md$/, '');
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        feed.addItem({
            title: data.title,
            id: `${site_url}/posts/${slug}`,
            link: `${site_url}/posts/${slug}`,
            description: data.description || content.slice(0, 200), // Use description from front matter or fallback
            content: content,
            author: [
                {
                    name: data.author,
                    email: data.authorEmail || "sophia@example.com", // Optional: Add author email in front matter
                    link: site_url,
                },
            ],
            date: new Date(data.date),
        });
    });

    // Generate the RSS XML
    const xml = feed.rss2();

    // Define the output path
    const outputPath = path.join(process.cwd(), 'public', 'feed.xml');

    // Write the RSS XML to the public folder
    fs.writeFileSync(outputPath, xml, 'utf8');

    console.log('RSS feed generated successfully at public/feed.xml');
};

// Execute the RSS generation function
generateRSS();