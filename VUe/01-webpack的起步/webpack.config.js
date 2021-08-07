// 倒入模块
const path = require('path');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
const HtmlWebpackplugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),

    // filename:'main.js' 不需要了 因为HtmlWebpackplugin这个插件
    //可能因为最新版本问题背景图片 可以显示 可以自动到dist的文件下找
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 13000,
              //给图片相关命名
              //[name]固定语法 把它当作一个变量 去取来的名字。不加[]而且后面加/的话会继续创建一个name文件夹， 不加[]所有图片的名字打包出来都会为name.png
              //[]里面都是变量 不加的话则相同
              name:'img/[name][hash:8].[ext]'
            },

          }
        ]
      },
        //file-loader 不用配置 因为有url-loader 和 配置后背景图片显示不出来 当且仅当只是遇到这个问题
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
      // }

        //ES6 转 ES5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },


    ]
  },
  resolve: {
    // alias: 别名
    // extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(''),
      new webpack.BannerPlugin('最终版权贵YL所有'),
      new HtmlWebpackplugin({
        //找当前配置文件所在目录下面 有没有index.html这个文件 用这个文件当模版
        template:'index.html'
      }),
      new UglifyjsWebpackPlugin('')
  ],
  devServer:{
    contentBase:'./dist',
    inline:true, //页面实时刷新
  },

}