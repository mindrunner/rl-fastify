module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-misused-promises": "error",
  },
  extends: ["plugin:@typescript-eslint/recommended"],
};
