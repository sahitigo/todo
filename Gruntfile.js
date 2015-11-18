module.exports = function(grunt){
  var cssFiles = [
  'assets/css/src/app.css'
  ];
  var jsFiles = [
  'assets/js/app.js',
  ];
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/src/app.css':'assets/css/src/app.scss'
        }
      }
    },
    watch : {
      css: {
        files: ['assets/css/src/*.scss'],
        tasks: ['sass','concat:css'],
      },
      js: {
        files: ['assets/js/src/**/*.js'],
        tasks: ['concat:js']
      }  
    },
    concat: {
      css: {
        src: cssFiles,
        dest:  'assets/css/app.css'
      },
      js: {
        src: jsFiles,
        dest: 'assets/js/app.js'
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass','concat','watch']);
};