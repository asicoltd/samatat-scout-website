/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/samatat-scout-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/samatat-scout-website/' : '',
}

module.exports = nextConfig