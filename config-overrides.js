const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#D3F5F1',
      '@primary-color': '#fff',
      '@text-color': 'rgb(136, 146, 176)',
      '@body-background': '#161721',
      '@body-background': '#141822',
      '@body-background': '#304162',
      '@body-background': '#0D1B28',
      '@component-background': 'none'
    },
  }),
);
