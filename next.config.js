/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.jsdelivr.net']
    },
    experimental: {
        appDir: true,
    }
}

module.exports = nextConfig
