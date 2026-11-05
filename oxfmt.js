import prettier from "./prettier.js";

export default {
  ...prettier,
  sortPackageJson: false,
  sortImports: false,
  ignorePatterns: [
    "**/node_modules",
    "**/*.d.ts",
    "**/*.d.mts",
    "**/*.d.cts",
    "**/package-lock.json",
    "**/pnpm-lock.yaml",
  ],
};
