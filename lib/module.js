const { join, resolve } = require('path');
const api = require('./api');

const folderName = 'whppt-create-send';

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.createSend,
    ...moduleOptions,
  };

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: join(folderName, 'create-send.js'),
    options,
  });

  this.addTemplate({
    src: resolve(__dirname, 'templates/SiteSetting.vue'),
    fileName: join(folderName, 'templates/SiteSetting.vue'),
    options: {},
  });

  const _api = api.bind(options);

  this.addServerMiddleware({
    path: '/api/create-send',
    handler: _api,
  });
};

module.exports.meta = require('../package.json');
