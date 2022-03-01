# 環境作成

## create react app

```
npx create-react-app . --template typescript
yarn
```

## eslint

```
yarn eslint --init
```

```
? How would you like to use ESLint?
》To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
》JavaScript modules (import/export)
? Which framework does your project use?
》React
? Does your project use TypeScript?
》Yes
? Where does your code run?
》Browser
? How would you like to define a style for your project?
》Use a popular style guide
? Which style guide do you want to follow?
》Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in?
》JavaScript
The config that you've selected requires the following dependencies: 各種パッケージ
? Would you like to install them now with npm?
》No

```

```
yarn add -D 各種パッケージ
yarn add -D eslint-plugin-prefer-arrow eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks
typesync; yarn
```

```
.eslintrc.js
{
  extends: [
    ...
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parserOptions: {
    ...
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
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
    // Promise を未処理にしたいケースがあるため無効にした
    '@typescript-eslint/no-floating-promises': 'off',
    // アップデートに伴い import React from 'react' がエラー扱いとなってしまうのを修正した
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
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
}

```

```
touch tsconfig.eslint.json
```

```
tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

```
vi .eslintignore
```

```
build/
public/
**/coverage/
**/node_modules/
**/*.min.js
*.config.js
.*lintrc.js
```

## prettier

```
yarn add -D prettier eslint-config-prettier
yarn
```

```
vi .prettierrc
```

```
singleQuote: true
trailingComma: "all"
```

```
package.json
"scripts": {
  ...
  "fix": "npm run -s format && npm run -s lint:fix",
  "format": "prettier --write --loglevel=warn '{public,src}/**/*.{js,jsx,ts,tsx,html,gql,graphql,json}'",
},
```

(eslint のプラグインが足りてるかを確認)

```
yarn lint
```

(eslint と prettier が競合してないかを確認)

```
npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'
```


## husky

```
yarn add -D husky
yarn husky install
```

```
"scripts": {
  ...
  "prepare": "husky install"
}
```

```
yarn husky add .husky/pre-commit "yarn fix"
```

## commit lint

```
yarn add -D @commitlint/{config-conventional,cli}
vi .commitlintrc.yml
```

```
extends:
  - '@commitlint/config-conventional'
```

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## storybook

```
npx sb init
```

```
.eslintignore
**/*.stories.*
**/stories/
```
