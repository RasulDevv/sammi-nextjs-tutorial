/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'st4.depositphotos.com', 'media.graphassets.com']
  }
}

module.exports = nextConfig
