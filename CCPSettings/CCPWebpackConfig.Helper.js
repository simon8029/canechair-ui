// const Path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

// exports.devServer = ({ host, port } = {}) => ({
//   devServer: {
//     stats: "errors-only",// Display errors only 
//     host,
//     port,
//     overlay: {
//       errors: true,
//       warnings: true
//     },
//     watchOptions: {
//       aggregateTimeout: 300, // Delay the rebuild after the first change
//       poll: 1000 // poll using interval in ms (accepts boolean)
//     },
//   },
//   plugins: [
//     new Webpack.WatchIgnorePlugin([
//       Path.join(__dirname, "node_modules") // Ignore node_modules so CPU usage with poll watching drops significantly.
//     ]),
//     new Webpack.LoaderOptionsPlugin({
//       debug: true,
//       noInfo: false
//     })
//   ]
// });

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      { test: /\.css$/, include, exclude, loaders: ['style-loader', 'css-loader'] }
    ]
  }
});

exports.extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    // `allChunks` is needed with CommonsChunkPlugin to extract from extracted chunks as well.
    allChunks: true,
    filename: "[name].[chunkhash:8].css",
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: plugin.extract({
            use,
            fallback: "style-loader",
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require('autoprefixer')()]
  }
})

exports.purifyCSS = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })]
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      { test: /\.(png|jpg|svg)$/, include, exclude, use: { loader: "url-loader", options } }
    ]
  }
});

exports.transformJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      { test: /\.js$/, include, exclude, use: "babel-loader" }
    ]
  }
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type
});

exports.extractBundles = bundles => ({
  plugins: bundles.map(
    bundle => new Webpack.optimize.CommonsChunkPlugin(bundle)
  )
});

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path], { root: process.cwd(), verbose: true })]
});

exports.attachRevision = () => ({
  plugins: [
    new Webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version()
    })
  ]
})

exports.uglifyJavaScript = () => ({
  plugins: [new UglifyWebpackPlugin]
})

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false
    })
  ]
})

// exports.setFreeVariable = (key, value) => {
//   const env = {};
//   env[key] = JSON.stringify(value);

//   return {
//     plugins: [new Webpack.DefinePlugin(env)]
//   }
// }

// // export function loadCSS(include, exclude) {
// //   return `module: {
// //     rules: [
// //       { test: /.\css$/, include, exclude, use: ["style-loader", "css-loader"] }
// //     ]
// //   });`;
// // }
