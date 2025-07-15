/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disables lightningcss to avoid native module issues
    optimizeCss: false,
  },
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
};

module.exports = nextConfig;