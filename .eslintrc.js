module.exports = {
  root: true, // 현재 eslintrc 파일을 기준으로 ESLint 규칙 적용. 현재 디렉토리보다 부모 디렉토리의 eslintrc는 무시됨
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single'], // single quotes가 아닐 시 warn
    semi: ['error', 'always'], // 구문 끝에 항상 semicolon이 있어야함. 없을 시 error
    indent: 'off', // eslint에서는 indent 체크 해제 (prettier에서 수행)
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        trailingComma: 'all',
      },
    ],
  },
};
