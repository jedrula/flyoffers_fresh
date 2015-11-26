/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  // var app = new EmberApp(defaults, {
  //   // Add options here
  //   'ember-bootstrap': {
  //       'importBootstrapTheme': true
  //   }
  // });

  var app = new EmberApp(defaults, {
   compassOptions: {
       importPath: [
         'bower_components/bootstrap-sass/assets/stylesheets'
       ]
   },
   // emberCliFontAwesome: {
   //    useScss: true
   // }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js');
  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');//TODO use min version?
  //im not sure if that might even help: 


  app.import('bower_components/typeahead.js/dist/typeahead.bundle.min.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
