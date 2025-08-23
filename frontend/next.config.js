/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence workspace root warning
  outputFileTracingRoot: require('path').join(__dirname, '../'),
  // Allow CSS imports from parent directory
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
