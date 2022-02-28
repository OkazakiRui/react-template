module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks',
  ],
  rules: {
    // oid を式として使用を禁止する
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // return の前には空行を入れる
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 使用してない変数の定義を禁止する。_はセーフ
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    // import の際下記以外は拡張子を記述させる
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 関数に返り値しかない場合は () => () のようにする
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    // 全ての関数を arrow function にする
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    // eslint-config-airbnb で .jsx のみになっているので拡張
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // コンポーネントを呼ぶ際の props の記述にスプレット構文を許さない
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    // jsxを記述する際にreactをimportするのを強制するのを無効にした
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // props を定義するのを強制するルール、typescriptを使用しているため無効
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    // 絶対パスを src にしたことで解決できずエラーが出てしまうのを解決
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
