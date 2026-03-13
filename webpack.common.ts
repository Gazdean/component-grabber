import path from "path"
import { Configuration } from "webpack"
import CopyWebpackPlugin from "copy-webpack-plugin"

const config: Configuration = {
  entry: {
    background: "./src/background.ts",
    content: "./src/content.ts",
    popup: "./src/popup.ts",
    options: "./src/options.ts",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
}

export default config
