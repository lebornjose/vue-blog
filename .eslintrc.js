module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  parser: 'vue-eslint-parser',
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    // allow debugger during development
    'linebreak-style': 0,
    'no-tabs': 0,
    'indent': ['off', 'tab'],
    'no-trailing-spaces': 0,
    'arrow-parens': 0,
// allow async-await
    'generator-star-spacing': 0,
// allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': [2, {
// 允许声明未使用变量
      'vars': 'local',
// 参数不检查
      'args': 'none'
    }],
// 关闭语句强制分号结尾
    'semi': [0],
//空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 100}],
//关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    'no-console': 'off'
  }
}
