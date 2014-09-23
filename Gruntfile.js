/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "client/compile/index.html": ["client/dev/templates/index.jade"]
        }
      }
    },
    sass: {
      options: {
        noCache: true
      },
      dist: {
        files: {
          'client/compile/styles/main.css': 'client/dev/styles/main.sass'
        }
      }
    },
    concat: {
      basic: {
        src: ['client/dev/scripts/*.js'],
        dest: 'client/compile/scripts/app.js'
      }
    },
    uglify: {
      basic: {
        files: {
          'client/compile/scripts/app.min.js': ['client/compile/scripts/app.js']
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          $: true,
          jquery: true,
          Board: true,
          Tile: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      scripts: {
        src: ['client/dev/scripts/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      scripts: {
        files: 'client/dev/scripts/*.js',
        tasks: ['jshint:scripts', 'concat', 'uglify']
      },
      templates: {
        files: 'client/dev/templates/index.jade',
        tasks: ['jade']
      },
      styles: {
        files: 'client/dev/styles/*.sass',
        tasks: ['sass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', ]);

};
