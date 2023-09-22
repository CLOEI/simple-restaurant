/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: '/',
      destination: '/menu',
      permanent: false
    }]
  }
}

module.exports = nextConfig
