// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["error", 2],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}], // 冒号前不要空格，后需要空格
    "comma-spacing": [2, {"before": false, "after": true}], // 逗号前不要空格，后需要空格
    "arrow-spacing": [2, {"before": true, "after": true}], //箭头函数中的箭头前后需要留空格
    'linebreak-style': 'off',
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "no-console": 0,
  }
}
