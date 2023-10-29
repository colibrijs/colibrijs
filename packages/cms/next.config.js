/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL ?? 'http://api.colibrijs.io/',
  },
}

module.exports = nextConfig;
