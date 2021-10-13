const path = require('path') // 这个是需要的

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/variables.less')]
    }
  }
}
