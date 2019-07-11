import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

/**
 * css loaders configurations
 */

const cssmoduleloader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localsConvention: 'camelCaseOnly',
    modules: {
      localIdentName: '[local]__[hash:base64:5]'
    }
  }
};

const postcssloader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    // plugins: () => [
    //   autoprefixer({
    //     browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    //   })
    // ]
  }
};

/**
 * config is the webpack config
 */

let config = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.join(__dirname, 'src', 'app', 'index.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist', 'javascripts'),
    publicPath: '/javascripts/',
    filename: 'bundle.js'
  },
  plugins: (process.env.NODE_ENV === 'production') ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: (process.env.NODE_ENV === 'production' ? 'production' : 'development'),
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   port: 8000,
  //   hot: true
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src', 'app'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                ['@babel/preset-env', {targets: {browsers: 'last 2 versions'}}],
                // "@babel/preset-typescript",
                '@babel/preset-react'
              ],
              plugins: [
                // // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                // ["@babel/plugin-proposal-decorators", { legacy: true }],
                // ["@babel/plugin-proposal-class-properties", { loose: true }],
                // "react-hot-loader/babel"
              ]
            }
          },
          'react-hot-loader/webpack',
          // 'webpack-module-hot-accept'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {modules: false, sourceMap: true}
          },
          // postcssloader,
          'sass-loader'
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          cssmoduleloader,
          // postcssloader,
          'sass-loader'
        ]
      }
    ]
  }
};

/**
 * expose
 */

export { config };
