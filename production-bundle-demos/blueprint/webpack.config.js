const path = require("path");

module.exports = {
  mode: "development",
  output: {
    library: "import-antd",
    libraryTarget: "umd",
    filename: "index.js"
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              data: '@import "theme";',
              includePaths: [path.join(__dirname, "src")]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
