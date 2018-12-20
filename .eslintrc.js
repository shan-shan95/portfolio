module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    "eslint:recommended", //ESLintで基本的なルールチェック(更に細かく個別指定可)
    "plugin:prettier/recommended" //一番下に書かないとうまく動かない場合も
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true, //シングルクォーテーションのフォーマット 参考）https://prettier.io/docs/en/options.html#quotes
        "semi": false, //セミコロンのフォーマット 参考）https://prettier.io/docs/en/options.html#semicolons
        "files.associations": {
          "*.vue": "vue"
        },
        // vueにcssのemmet追加
        "emmet.syntaxProfiles": {
          "vue": "css"
        },
        "indent": ["error", "tab"],
      },
    ],
  }
}
