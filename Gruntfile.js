/*global module:false*/
module.exports = function(grunt) {



  // Project configuration.
  grunt.initConfig({
    jshint: {
      // define the files to lint
      files: ['cvince-underscore.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`

  grunt.loadNpmTasks('grunt-contrib-jshint')

  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', ['jshint']);
};
