# dev-config

```sh
npm i -D @startracex/dev-config
```

## biome

biome.json

```json
{
  // "extends": ["@startracex/dev-config/biome-v1"], // biome v1
  "extends": ["@startracex/dev-config/biome"],
  "linter": {
    "rules": {
      /* ... linting rules override */
    }
  },
  "formatter": {
    "rules": {
      /* ... formatting rules override */
    }
  }
}
```

## dprint

### dprint-typescript

dprint.json

```json
{
  "extends": ["./node_modules/@startracex/dev-config/dprint.json"],
  "typescript": {
    /* ... formatting rules override */
  },
  "plugins": [
    /* run `dprint config add typescript` */
  ]
}
```

### dprint-prettier

dprint.json

```json
{
  "extends": ["./node_modules/@startracex/dev-config/dprint-prettier.json"],
  "prettier": {
    /* ... formatting rules override */
  },
  "plugins": [
    /* run `dprint config add prettier` */
  ]
}
```

## prettier

prettier.config.js

```js
import config from "@startracex/dev-config/prettier";

export default {
  ...config,
  /* ... formatting rules override  */
}
```

package.json

```json
{
  "prettier": "@startracex/dev-config/prettier"
}
```
