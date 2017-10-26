const webpack = require('webpack');
const path = require('path');
const colors = require('colors');
const rimraf = require('rimraf');

const webpackConf = require('../webpack.config.inspect');

rimraf.sync(webpackConf.output.path);

webpack(webpackConf).run((err, stats) => {
  if (stats.hasErrors()){
    console.log(stats.toString({colors: true}));
    console.log('ERROR, scroll up for details'.red);
    return 1;
  }
  
  console.log(stats.toString({colors: true}));

  if (stats.hasWarnings()){
    console.log('OK, but with warnings'.yellow);
    return 0;
  }

  console.log('OK'.green);
  return 0;
});