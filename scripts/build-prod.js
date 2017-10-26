const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const rimraf = require('rimraf');

const webpackConf = require('../webpack.config.prod');

rimraf.sync(webpackConf.output.path);

webpack(webpackConf).run((err, stats) => {
  if (stats.hasErrors()){
    console.log(stats.toString({colors: true}));
    console.log('ERROR, scroll up for details'.red);
    return 1;
  }
  
  fs.writeFile(path.resolve(__dirname, 'stats.json'), JSON.stringify(stats.toJson({
    children: true,
    chunkOrigins: true,
    entrypoints: true,
    source: false,
    usedExports: true,
    providedExports: true
  })), 'utf8', (err) => {
    if (err){
      console.log(err);
      console.log('failed writing stats to file'.red);
    }

    console.log('Stats written to file');
  });

  console.log(stats.toString({
    maxModules: 500,
    colors: true
  }));

  if (stats.hasWarnings()){
    console.log('OK, but with warnings'.yellow);
    return 0;
  }

  console.log('OK'.green);
  return 0;
});