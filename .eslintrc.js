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
  rules: {},
  extends: ["plugin:@typescript-eslint/recommended"],
};
