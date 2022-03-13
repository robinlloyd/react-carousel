const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.resolve.alias['@packages'] = path.resolve(__dirname, './packages')

    return config
  }
}

module.exports = nextConfig
