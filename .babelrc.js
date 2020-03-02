const path = require("path");

module.exports = api => {
  api.cache(true);

  return {
    plugins: [
      [
        "styled-jsx/babel",
        {
          plugins: [
            [
              "styled-jsx-plugin-postcss",
              { path: path.join(__dirname, "./postcss.config.js") }
            ]
          ]
        }
      ]
    ]
  };
};
