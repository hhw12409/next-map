/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['lecture-1.vercel.app', 'search.pstatic.net'],
  },
};

module.exports = nextConfig;
