module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // gzip assets 1-to-1 for production
      compress: {
        main: {
          options: {
            mode: 'gzip'
          },
          expand: true,
          cwd: 'build/',
          src: ['**/*.{html,js,css, svg}'],
          dest: 'build/static_zip'
        }
      }

    //     concat: {
    //         options: {
    //           separator: ';',
    //         },
    //         dist: {
    //           src: ['losgodinez/src/js/*.js'],
    //           dest: 'losgodinez/build/js/production.js',
    //         },
    //     },
    //     uglify: {
    //       build: {
    //           src: 'losgodinez/build/js/production.js',
    //           dest: 'losgodinez/build/js/production.min.js'
    //       }
    //   },
    //   imagemin: {
    //     dynamic: {
    //         files: [{
    //             expand: true,
    //             cwd: 'losgodinez/src/img/',
    //             src: ['**/*.{png,jpg,gif}'],
    //             dest: 'losgodinez/build/img/'
    //         }]
    //     }
    // },
    // cssmin: {
    //   target: {
    //     files: [{
    //       expand: true,
    //       cwd: 'losgodinez/src/css',
    //       src: ['*.css', '!*.min.css'],
    //       dest: 'losgodinez/build/css',
    //       ext: '.min.css'
    //     }]
    //   }
    // }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['compress']);

};
