# dev-config

```sh
npm i -D @startracex/dev-config
```

## biome

`biome.json`

```json
{
  // "extends": ["@startracex/dev-config/biome-v1"], // biome v1
  "extends": ["@startracex/dev-config/biome"]
}
```

## dprint

dprint has two presets, typescript and prettier, they cannot coexist.

All presets has no print width limit.

### dprint-typescript

`dprint.json`

```json
{
  "extends": ["./node_modules/@startracex/dev-config/dprint.json"],
  "typescript": {
    "lineWidth": 120
  },
  "plugins": [
    /* run `dprint config add typescript` */
  ]
}
```

### dprint-prettier

Prettier also format markdown, json etc, which can be suppressed by add markdown and json plugins.

`dprint.json`

```json
{
  "extends": ["./node_modules/@startracex/dev-config/dprint-prettier.json"],
  "prettier": {
    "printWidth": 120
  },
  "json": {},
  "plugins": [
    /* run `dprint config add prettier && dprint config add json` */
  ]
}
```

## eslint

### stylistic

This preset only contains rules.

This preset has no print width or indent limit.

`eslint.config.js`

```js
import stylistic from "@stylistic/eslint-plugin";
import stylisticRules from "@startracex/dev-config/stylistic";

export default [
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...stylisticRules,
    },
  },
];
```

`.eslintrc`

```json
{
  "extends": ["./node_modules/@startracex/dev-config/eslint.config.js"],
  "plugins": ["@stylistic"]
}
```

## prettier

This preset has no print width limit.

`prettier.config.js`

```js
import config from "@startracex/dev-config/prettier";

export default {
  ...config,
  printWidth: 120,
};
```

`package.json`

```json
{
  "prettier": "@startracex/dev-config/prettier"
}
```

## tsconfig

`tsconfig.json`

```json
{
  "extends": "@startracex/dev-config/tsconfig/lib"
}
```
