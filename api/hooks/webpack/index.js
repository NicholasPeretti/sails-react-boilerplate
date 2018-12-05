/**
 * webpack hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

const webpack = require('webpack')

module.exports = function defineWebpackHook(sails) {
  return {
    initialize: function (done) {
      const config = sails.config.webpack
      const compiler = webpack(config)

      compiler.watch({
        aggregateTimeout: 300,
        ignored: /node_modules/
      }, (err, stat) => {
        if (err) {
          return done(err)
        }

        sails.log.info(stat.toString({
          colors: true
        }))
      })

      return done()
    }
  }
}
