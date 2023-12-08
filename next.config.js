// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", //genera carpeta out con archivos estáticos
    reactStrictMode: true,
    swcMinify: true
}

module.exports = withContentlayer(nextConfig)