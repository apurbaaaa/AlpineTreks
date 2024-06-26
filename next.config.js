/** @type {import('next').NextConfig} */
module.exports = {
  exportTrailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.bookmundi.com',
        port: '',
        pathname: '/tour/**',
      },
      {
        protocol: 'https',
        hostname: 'mountaintrekkingnepal.com',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'mountaintrekkingnepal.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about/reviews': { page: '/about/reviews' },
      '/about/team': { page: '/about/team' },
      '/about/whoarewe': { page: '/about/whoarewe' },
      '/about/whyus': { page: '/about/whyus' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
      '/booking': { page: '/booking' },
      '/destination': { page: '/destination' },
      '/region': { page: '/region' },
    };
  },
};
