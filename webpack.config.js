const webpack = require('webpack');
module.exports  = {
    devtool: 'source-map',
    entry: './src/index.js',
    output : {
        path: __dirname + "./build",
        filename: "bundle.js",

    },
    module: {
      loader : [
        {
          test : /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets : ['es2015', 'react']
          }
        },
        {
          test: /\.css$/,
          // loaders: ['style-loaders, css-loaders']
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV': JSON.stringify ('productio')
        }
      })
    ]
};
