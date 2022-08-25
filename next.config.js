/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  future: { webpack5: true },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
