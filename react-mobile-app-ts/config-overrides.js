const { override, fixBabelImports, adjustStyleLoaders, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/styles/settings/index.scss'
        }
      });
    }
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src")
  })
  )
