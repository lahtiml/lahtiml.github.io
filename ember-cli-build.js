/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-foundation-sass': {
      'modernizr': true,
      'foundationJs': ['topbar', 'clearing']
    }
  });

  return app.toTree();
};
