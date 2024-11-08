module.exports = {
   root: true,
   env: {
      node: true,
   },
   extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      '@vue/typescript/recommended',
   ],
   parserOptions: {
      ecmaVersion: 2020,
   },
   rules: {
      indent: ['error', 3],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
   },
};
