module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@domains": "./src/Domains",
          "@components": "./src/Components",
          "@views": "./src/Views"
        }
      }
    ]
  ]
};
