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
  ]
}
```

## dprint

dprint.json

```json
{
  "extends": [
    "./node_modules/@startracex/dev-config/dprint.json"
  ],
  "excludes": [
    "**/node_modules"
  ]
}
```

## prettier

.(prettierrc|prettier.config).(js|ts|mjs|mts)

```js
import config from "@startracex/dev-config/prettier";

export default config;
```

package.json

```json
{
  "prettier": "@startracex/dev-config/prettier"
}
```
