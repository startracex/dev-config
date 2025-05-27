# dev-config

```sh
npm i -D @startracex/dev-config
```

## biome

biome.json

```json
{
  "extends": [
    "@startracex/dev-config/biome"
  ],
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
  "extends": [
    "./node_modules/@startracex/dev-config/dprint.json"
  ],
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
  "extends": [
    "./node_modules/@startracex/dev-config/dprint-prettier.json"
  ],
  "prettier": {
    /* ... formatting rules override */
  },
  "plugins": [
    /* run `dprint config add prettier` */
  ]
}
```

## prettier

(.prettierrc|prettier.config).(js|ts|mjs|mts)

```ts
import config from "@startracex/dev-config/prettier";
import type { Config } from "prettier";

export default {
  ...config,
  /* ... formatting rules override  */
} satisfies Config;
```

package.json

```json
{
  "prettier": "@startracex/dev-config/prettier"
}
```
