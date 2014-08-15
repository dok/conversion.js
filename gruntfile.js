module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      target: {
        files: {
          'conversion.min.js' : 'conversion.js'
        },
        opetions: {
          mangle: true,
          compress: {
            dead_code: false
          },
          output: {
            ascii_only: true
          },
          report: 'min',
          preserveComments: 'some'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};