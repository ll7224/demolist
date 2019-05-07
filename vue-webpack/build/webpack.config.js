const path = require('path')
module.exports = {
  // 指定打包模式
  mode: 'development',
  entry: {
    //配置入口文件
    main: ["@babel/polyfill" ,path.resolve(__dirname, '../src/main.js')]
  },
  output: {
    //配置打包文件输出目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的js文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的chunk名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用的路径
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}