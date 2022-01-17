/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_URL:
      'http://localhost:8081'
  },
  publicRuntimeConfig: {
    API_URL:
      process.env.API_URL ||
      'http://localhost:8081'
  }
}
