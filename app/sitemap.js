import fs from 'fs';
import { promisify } from 'util';
import fetchData from "@/utils/fetchData";
import { create } from 'xmlbuilder2';

const writeFile = promisify(fs.writeFile);
const outputDir = './public/sitemaps';

const formatDate = (dateString) => new Date(dateString).toISOString();

const generateUrls = (items, baseUrl, changefreq, priority) => {
    return items.map((item) => ({
        url: `${baseUrl}/${item.slug}`,
        lastmod: formatDate(item.updated_at),
        changefreq,
        priority,
    }));
};

export default async function sitemap(req, res) {
    try {
        const { packages, pages, regions, activities } = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sitemap`);

        if (!Array.isArray(packages) || !Array.isArray(pages) || !Array.isArray(regions) || !Array.isArray(activities)) {
            throw new Error('Invalid data structure');
        }

        const packageUrls = generateUrls(packages, `${process.env.NEXT_PUBLIC_API_BASE_URL}/package`, 'weekly', 0.8);
        const pageUrls = generateUrls(pages, `${process.env.NEXT_PUBLIC_API_BASE_URL}/page`, 'monthly', 0.7);
        const regionUrls = generateUrls(regions, `${process.env.NEXT_PUBLIC_API_BASE_URL}/region`, 'monthly', 0.7);
        const activityUrls = generateUrls(activities, `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity`, 'monthly', 0.7);

        const allUrls = [
            ...packageUrls,
            ...pageUrls,
            ...regionUrls,
            ...activityUrls,
        ];

        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Generate individual sitemaps
        const sitemapFiles = [];
        const sitemapSize = 5000;
        for (let i = 0; i < allUrls.length; i += sitemapSize) {
            const sitemapUrls = allUrls.slice(i, i + sitemapSize);
            const sitemapXml = createSitemapXml(sitemapUrls);
            const sitemapFilename = `sitemap-${i / sitemapSize + 1}.xml`;
            await writeFile(`${outputDir}/${sitemapFilename}`, sitemapXml);
            sitemapFiles.push(sitemapFilename);
        }

        // Generate sitemap index
        const sitemapIndexXml = createSitemapIndexXml(sitemapFiles);
        await writeFile(`${outputDir}/sitemap_index.xml`, sitemapIndexXml);

        res.setHeader('Content-Type', 'application/xml');
        res.send(sitemapIndexXml);

    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.status(500).send('Internal Server Error');
    }
}

const createSitemapXml = (urls) => {
    const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });
    urls.forEach((url) => {
        const urlElement = root.ele('url');
        urlElement.ele('loc').txt(url.url);
        urlElement.ele('lastmod').txt(url.lastmod);
        urlElement.ele('changefreq').txt(url.changefreq);
        urlElement.ele('priority').txt(url.priority.toString());
    });
    return root.end({ prettyPrint: true });
};

const createSitemapIndexXml = (sitemapFiles) => {
    const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('sitemapindex', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });
    sitemapFiles.forEach((filename) => {
        const sitemapElement = root.ele('sitemap');
        sitemapElement.ele('loc').txt(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sitemaps/${filename}`);
        sitemapElement.ele('lastmod').txt(new Date().toISOString());
    });
    return root.end({ prettyPrint: true });
};
