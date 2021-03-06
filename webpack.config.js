const path = require('path')
const webpack = require('webpack')

const main = './src/index.ts'

const sourcePaths = [main]

module.exports = (env, argv) => {
  return {
    entry: sourcePaths,

    mode: argv.mode,

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: argv.mode === 'development' ? 'hadoken.js' : 'hadoken.min.js',
      libraryTarget: 'umd',
      library: 'Hadoken',
    },

    externals: {
      phaser : {
        umd: 'phaser',
        commonjs2: 'phaser',
        commonjs: 'phaser',
        amd: 'phaser',
        // indicates global variable should be used
        root: 'Phaser'
      }
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [
            /node_modules/,
            /src\/example/,
          ],
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: argv.mode === 'development',
            },
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [
            /node_modules/,
          ],
        },
      ],
    },

    resolve: {
      alias: {
        ph: path.resolve(__dirname, 'src'),
      },
      extensions: [ '.js', '.ts' ]
    }
  }
}