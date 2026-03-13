import { merge } from "webpack-merge"
import config from "./webpack.common"

const merged = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
})

export default merged
