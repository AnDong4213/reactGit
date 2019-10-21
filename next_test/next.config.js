const path = require('path')
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const isDev = process.env.NODE_ENV !== 'production'

const assetPrefix = isDev ? '' : ''

console.log(process.env.NODE_ENV)

const nextConfig = {
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/register': {page: '/register'},
      '/post': {page: '/post'},
      '/post/:id': {page: '/post/id1'},
      '/product': { page: '/product' },
      '/product/a': { page: `/product/a`, query:{ title: 'deploy-nextjs' } }
    }
  },
  assetPrefix,
  distDir: 'build',
  generateEtags: false,
  pageExtensions: ['jsx', 'js'],
  webpack (config) {
    const { resolve = {}, module = {} } = config

    return {
      ...config,
      module: {
        ...module
      },
      resolve: {
        ...resolve,
        alias: {
          ...(resolve.alias || {})
        }
      }
    }
  },
  webpackDevMiddleware: config => config
}
module.exports = withCSS(withLess(nextConfig))
