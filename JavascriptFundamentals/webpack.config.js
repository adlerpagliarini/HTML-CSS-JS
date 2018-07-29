const path = require('path');

module.exports = {
    entry: "./pt2-RequestsAndArrays/10_array_manipulation.js",
    //entry: "./pt2-RequestsAndArrays/13_observables.ts",
    //entry: "./pt3-Reviewing/7_3_inheritence_prototype_example.js",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: "./dist/bundle.js",
      path: path.resolve(__dirname, 'dist')
    },
    watch: true
  }