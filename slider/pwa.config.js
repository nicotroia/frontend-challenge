const path = require('path');
const eslintrc = require('./.eslintrc');

exports.eslint = eslintrc;

const resourcesConfig = {
  loader: 'sass-resources-loader',
  options: {
    sourceMap: true,
    resources: [path.resolve(__dirname, './src/styles/vars.scss')],
  },
};

exports.webpack = function (config) {
  for (let i = config.module.rules.length - 1; i > -1; i--) {
    const rule = config.module.rules[i];

    // Add scss resources
    if (String(rule.test).indexOf('scss') > -1) rule.use.push(resourcesConfig);
  }
};

