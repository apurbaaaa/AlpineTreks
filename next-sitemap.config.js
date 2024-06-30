// next-sitemap.config.js

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './public/sitemaps',
  generateIndexSitemap: true,
  // You can add more options here if needed
};
