module.exports = {
  // 当前文件为eslint的根配置文件
  root: true,
  // 解析器
  parserOptions: {
    parser: 'babel-eslint',
  },
  // 运行环境
  env: {
    browser: true,
  },
  // 规则继承，vue主要的额外规则是v-if等指令的检测
  extends: ['plugin:vue/essential'],
  // 使用eslint-plugin-vue插件帮忙检测.vue文件的代码
  plugins: [
    'vue'
  ],
  /**
   * 自定义规则
   * "off" 或 0 : 关闭规则
   * "warn" 或 1 : 触犯规则为警告（不会中止程序）
   * "error" 或 2 : 触犯规则为错误（触发时会中止程序）
   * 额外选项可以通过数组字面量指定，例子如下：
   * "quotes": ["error", "single"]
   */
  rules: {
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境禁止debugger
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境禁止console
    "no-alert": process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境禁止alert
    "no-shadow-restricted-names": 2, // 禁用关键字及保留字等
    "dot-notation": 1, // 尽可能使用 . 来访问对象属性
    "no-multi-spaces": 1, // 禁止使用多个空格
    "brace-style": 1, // 大括号风格 - one true brace style
    "no-var": 1, // 禁用var声明
    "no-new-object": 1, // 禁止new Object
    "no-array-constructor": 1, // 禁止new Array
    "prefer-const": 1, // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-destructuring": 1, // 优先使用数组和对象解构
    "no-param-reassign": 1, // 禁止在函数中对函数参数重新赋值
    "no-extra-semi": 1, // 禁用不必要的分号
    "no-unused-vars": 1, // 禁止已声明但未使用的变量
    "indent": [1, 2], // 使用2个空格缩进
    "no-multiple-empty-lines": [1, {max: 1}], // 禁止连续出现2个及以上空行
    "default-case": 1, // 要求switch语句必须有default分支
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}], // 冒号前不要空格，后需要空格
    "comma-spacing": [1, {"before": false, "after": true}], // 逗号前不要空格，后需要空格
    "arrow-spacing": [1, {"before": true, "after": true}], // 箭头函数中的箭头前后需要留空格
    "quotes": [1, "single"], // 字符串使用单引号
    "semi": [1, "never"], // 禁止使用分号
    "linebreak-style": 0, // 强制使用一样的换行符风格
  }
}
