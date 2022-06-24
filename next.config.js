/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contentApiKey: 'testing1-2-3', 
    blogUrl: 'kayla-alewines-blog.ghost.io'
  }
}

module.exports = nextConfig
