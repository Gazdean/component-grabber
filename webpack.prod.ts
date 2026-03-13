import { merge } from "webpack-merge"
import config from "./webpack.common"

const merged = merge(config, {
  mode: "production",
  devtool: "source-map",
})

export default merged
