/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
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
};
