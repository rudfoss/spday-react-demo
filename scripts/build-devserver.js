const browsersync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const config = require('../webpack.config.dev');

const bundler = webpack(config);

browsersync.init({
  port: 3010,
  server: {
    baseDir: ['src'],
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: {
          maxModules: 10,
          colors: true
        },
        noInfo: false
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    'src/*.html'
  ],

  ghostMode: false,
  open: false,
  reloadOnRestart: true
});