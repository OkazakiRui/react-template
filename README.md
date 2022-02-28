# 環境作成

## cra

```
npx create-react-app . --template typescript; yarn
```

## eslint

```
yarn eslint --init

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

yarn add -D 各種パッケージ
typesync; yarn
```
