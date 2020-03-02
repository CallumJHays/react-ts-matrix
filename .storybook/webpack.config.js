const fs = require("fs");

module.exports = async ({ config }) => {
  config.resolve.extensions.push(".tsx", ".ts");

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
  });

  fs.writeFileSync("./config.json", JSON.stringify(config));

  return config;
};
