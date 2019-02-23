# MapCreator eslint config

This repo contains the eslint configs used at MapCreator.

## Available configs

 - es6
 - vue
 - promise

All configs are combined for a vue-cli 3 project in the root.

## Usage

For projects using vue-cli 3

```js
module.exports = {
  extends: '@mapcreator',
};
```

For projects using vue 2.x (without cli 3)

```js
module.exports = {
  extends: [
    '@mapcreator/eslint-config/vue',
    '@mapcreator/eslint-config/promise',
    '@mapcreator/eslint-config/es6',
  ],
};
```
