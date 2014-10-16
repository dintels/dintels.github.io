// Generated on 2014-10-10 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: styles
//   compass: _scss
//   javascript: scripts
//   coffeescript: _src
//   images: images
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/styles/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      coffee: {
        files: ['<%= yeoman.app %>/_src/**/*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
      },
      jekyll: {
        files: [
        '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
        // '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
        '.jekyll/**/*.html',
        '.tmp/styles/**/*.css',
        '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
        '<%= yeoman.app %>/images/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          // base: [
          // '.tmp',
          // '.jekyll',
          // '<%= yeoman.app %>'
          // ],

          middleware: function(connect, options, middlewares) {
            return [
              connect.static('.tmp'),
              connect.static('.jekyll'),
              connect().use('/_bower_components', connect.static('app/_bower_components')),
              connect().use('/fonts', connect.static('app/_bower_components/bootstrap/dist/fonts')),
              connect().use('/startup', connect.static('startup')),
              connect.static('app'),
              //connect.static('<%= yeoman.app %>'),
            ];
          },
        }
      },
      dist: {
        options: {
          open: true,
          livereload: false,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          middleware: function(connect, options, middlewares) {
            return [
            connect.static('.tmp'),
            connect.static('.jekyll'),
            connect.static('test'),
            connect().use('/_bower_components', connect.static('app/_bower_components')),
            connect().use('/fonts', connect.static('app/_bower_components/bootstrap/dist/fonts')),
            connect().use('/startup', connect.static('startup')),
            connect.static('app'),
            //connect.static('<%= yeoman.app %>'),
            ];
          },
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
          '<%= yeoman.dist %>/*',
          '.tmp',
          // Running Jekyll also cleans the target directory.  Exclude any
          // non-standard `keep_files` here (e.g., the generated files
          // directory from Jekyll Picture Tag).
          '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
      '.tmp',
      '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        bundleExec: true,
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/styles',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        relativeAssets: false,
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: '.tmp/images/generated'
        }
      }
    },
    less: {
      options: {
        paths: ['<%= yeoman.app %>/_bower_components'],
      },
      dist: {
        options: {
          cleancss: true,
          report: 'gzip'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          src: '*.less',
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      server: {
        options: {
          sourceMap: true,
          sourceMapBasepath: '<%= yeoman.app %>/',
          sourceMapRootpath: '../'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          src: '*.less',
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },
    // Automatically inject Bower components into the HTML file
    wiredep: {
      app: {
        // ignorePath: /^\/|\.\.\//,
        ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/,
        src: ['<%= yeoman.app %>/_includes/styles.html', '<%= yeoman.app %>/_includes/scripts.html'],
        //exclude: ['<%= yeoman.app %>/_bower_components/bootstrap/dist/js/bootstrap.js']
        // exclude: ['<%= yeoman.app %>/_bower_components/jquery/dist/jquery.js']
      },
      less: {
      src: ['<%= yeoman.app %>/styles/{,*/}*.less'],
      //ignorePath: /(\.\.\/){1,2}bower_components\//,
      ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/,
    }
  },
  autoprefixer: {
    options: {
      browsers: ['last 2 versions']
    },
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.dist %>/styles',
        src: '**/*.css',
        dest: '<%= yeoman.dist %>/styles'
      }]
    },
    server: {
      files: [{
        expand: true,
        cwd: '.tmp/styles',
        src: '**/*.css',
        dest: '.tmp/styles'
      }]
    }
  },
  coffee: {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>/_src',
        src: '**/*.coffee',
        dest: '.tmp/scripts',
        ext: '.js'
      }]
    },
    test: {
      files: [{
        expand: true,
        cwd: 'test/spec',
        src: '**/*.coffee',
        dest: '.tmp/spec',
        ext: '.js'
      }]
    }
  },
  jekyll: {
    options: {
      bundleExec: true,
      config: '_config.yml,_config.build.yml',
      src: '<%= yeoman.app %>'
    },
    dist: {
      options: {
        dest: '<%= yeoman.dist %>',
      }
    },
    server: {
      options: {
        config: '_config.yml',
        dest: '.jekyll'
      }
    },
    check: {
      options: {
        doctor: true
      }
    }
  },
  useminPrepare: {
    options: {
      dest: '<%= yeoman.dist %>'
    },
    html: ['<%= yeoman.dist %>/index.html']
  },
  usemin: {
    options: {
      assetsDirs: '<%= yeoman.dist %>',
    },
    html: ['<%= yeoman.dist %>/**/*.html'],
    css: ['<%= yeoman.dist %>/styles/**/*.css']
  },
  htmlmin: {
    dist: {
      options: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true
      },
      files: [{
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.html', '!startup/**'],
        dest: '<%= yeoman.dist %>',
      }]
    }
  },
  // Usemin adds files to concat
  concat: {},
  // Usemin adds files to uglify
  uglify: {},
  // Usemin adds files to cssmin
  cssmin: {
    dist: {
      options: {
        check: 'gzip'
      }
    }
  },
  imagemin: {
    dist: {
      options: {
        progressive: true
      },
      files: [{
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.{jpg,jpeg,png}', '!startup/**'],
        dest: '<%= yeoman.dist %>'
      }]
    }
  },
  svgmin: {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.dist %>',
        src: ['**/*.svg', '!startup/**' ],
        dest: '<%= yeoman.dist %>'
      }]
    }
  },
  copy: {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>',
        src: [
        // Jekyll processes and moves HTML and text files.
        // Usemin moves CSS and javascript inside of Usemin blocks.
        // Copy moves asset files and directories.
        'images/**/*',
        'fonts/**/*',
        // Like Jekyll, exclude files & folders prefixed with an underscore.
        '!**/_*{,/**}',
        // Explicitly add any files your site needs for distribution here.
//         '_bower_components/jquery/dist/jquery.js',
//         '_bower_components/modernizr/modernizr.js',
//         '_bower_components/bootstrap/dist/js/bootstrap.js',
        'favicon.ico',
        'apple-touch*.png'
        ],
        dest: '<%= yeoman.dist %>'
      },
      {
        expand: true,
        dot: true,
        cwd: 'startup',
        dest: '<%= yeoman.dist %>/startup',
        src: [
        'common-files/**',
        'flat-ui/**',
        '!flat-ui/.git'
        ]
      }
      ]
    },
    // Copy CSS into .tmp directory for Autoprefixer processing
    stageCss: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>/styles',
        src: '**/*.css',
        dest: '.tmp/styles'
      }]
    }
  },
  filerev: {
    options: {
      length: 4
    },
    dist: {
      files: [{
        src: [
        '<%= yeoman.dist %>/scripts/**/*.js',
        '<%= yeoman.dist %>/styles/**/*.css',
        '<%= yeoman.dist %>/images/**/*.{gif,jpg,jpeg,png,svg,webp}',
        '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}',
        '!startup/**'
        ]
      }]
    }
  },
  buildcontrol: {
    dist: {
      options: {
        remote: 'https://github.com/dintels/dintels.github.io.git',
        branch: 'master',
        commit: true,
        push: true
      }
    }
  },
  coffeelint: {
    options: {
      'max_line_length': {
        'level': 'ignore'
      }
    },
    check: ['<%= yeoman.app %>/_src/*.coffee']
  },
  jshint: {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: [
    'Gruntfile.js',
    '<%= yeoman.app %>/scripts/**/*.js',
    'test/spec/**/*.js'
    ]
  },
  csslint: {
    options: {
      csslintrc: '.csslintrc'
    },
    check: {
      src: [
      '<%= yeoman.app %>/styles/**/*.css',
      '<%= yeoman.app %>/_scss/**/*.scss'
      ]
    }
  },
  concurrent: {
    server: [
    'compass:server',
    'less:server',
    'coffee:dist',
    'copy:stageCss',
    'jekyll:server'
    ],
    dist: [
    'compass:dist',
    'less:dist',
    'coffee:dist',
    'copy:dist'
    ]
  }
});

// Define Tasks
grunt.registerTask('serve', function (target) {
  if (target === 'dist') {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
  }

  grunt.task.run([
    'clean:server',
    'wiredep',
    'concurrent:server',
    'autoprefixer:server',
    'connect:livereload',
    'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
  'clean:server',
  'jekyll:check',
  'compass:server',
  'coffeelint:check',
  'coffee:dist',
  'jshint:all',
  'csslint:check'
  ]);

  grunt.registerTask('build', [
  'clean',
  'wiredep',
  // Jekyll cleans files from the target directory, so must run first
  'jekyll:dist',
  'concurrent:dist',
  'useminPrepare',
  'concat',
  'autoprefixer:dist',
  'cssmin',
  'uglify',
//   'imagemin',
//   'svgmin',
  'filerev',
  'usemin',
  'htmlmin'
  ]);

  grunt.registerTask('deploy', [
  'check',
  'test',
  'build',
  'buildcontrol'
  ]);

  grunt.registerTask('default', [
  'check',
  'test',
  'build'
  ]);
};
