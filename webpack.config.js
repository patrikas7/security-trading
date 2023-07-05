export const module = {
  rules: [
    {
      test: /\.module\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]__[hash:base64:5]",
            },
            importLoaders: 1,
          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
};
