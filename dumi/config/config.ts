const path = require('path');
const pluginPath = path.resolve(__dirname, '../../node_modules/@umijs/plugin-locale');
console.log('++++++++++++++++++++++++++++++++++++', pluginPath);
export default {
  chainWebpack(memo: any) {
    memo.plugins.delete('copy');
  },
  plugins: [
    pluginPath
  ]
}
