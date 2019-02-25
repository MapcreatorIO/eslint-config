# MapCreator eslint config

This repo contains the eslint configs used at MapCreator.

## Available configs

 - es6
 - vue
 - promise

All configs are combined for vue projects in the root.

## Usage

For projects using vue

```js
module.exports = {
  extends: '@mapcreator',
};
```

For projects using vue-cli 3

```js
module.exports = {
  extends: [
    'plugin:vue/base',
    '@mapcreator',
  ],
};
```
