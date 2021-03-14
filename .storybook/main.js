const path = require("path")

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules = [
      ...config.module.rules.filter(rule => rule.test.source !== (/\.css$/).source),
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
    config.resolve.alias = {
      "@": path.resolve(__dirname, "..")
    }
    return config
  }
}