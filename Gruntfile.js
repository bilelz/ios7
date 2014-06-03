module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap : true
      },
      build: {
        src: 'js/index.js',
        dest: 'build/<%= pkg.name %>.<%= pkg.version.replace(/\\./g,"") %>.min.js'
      }
    },
     // !! This is the name of the task ('requirejs')
    requirejs: {
      compile: {

        // !! You can drop your app.build.js config wholesale into 'options'
        options: {
          appDir: "js/",
          baseUrl: ".",
          dir: "build/js/",
          optimize: 'uglify',
          mainConfigFile:'./js/index.js',
          modules:[
            {
              name:'MyModule'
            }
          ],
          logLevel: 0,
          findNestedDependencies: true,
          fileExclusionRegExp: /^\./,
          inlineText: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};