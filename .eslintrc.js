module.exports = {
  root: true, // 현재 eslintrc 파일을 기준을로 ESLint 규칙 적용
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  rules: {
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single'], // single quotes가 아닐 시 warn
    semi: ['error', 'always'], // 구문 끝에 항상 semicolon이 있어야함. 없을 시 error
    indent: ['error', 2], // indent 크기가 2가 아닐 때, error
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        arrowParens: 'avoid',
        endOfLine: 'lf'
      }
    ]
  }
};
