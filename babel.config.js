module.exports = {
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-export-default-from",
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          browsers: "last 2 versions",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
