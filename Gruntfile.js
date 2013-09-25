module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify2: {
            // options: {},
            dev: {
                entry: './index',
                compile: './build/debug/index.js',
                debug: true
            },
            prod: {
                entry: './index',
                compile: './.tmp/index.js',
                debug: false
            }
        },

        uglify: {
            options: {
                report: 'gzip',
                wrap: true,
                banner: '/* ANTITOP extension */\n\n\n\n'
            },
            prod: {
                files: {
                    'build/release/index.js': '.tmp/index.js'
                }
            }
        },

        less: {
            options: {
                report: 'gzip'
            },
            dev: {
                files: {
                    'build/debug/style.css': 'less/app.less'
                }
            },
            prod: {
                options: {
                    yuicompress: true
                },
                files: {
                    'build/release/style.css': 'less/app.less'
                }
            }
        },

        watch: {
            dev: {
                files: ['**/*.js', '**/*.less'],
                tasks: [
                    'browserify2:dev',
                    'less:dev',
                    'copy'
                ],
                options: {
                    spawn: false,
                    atBegin: true
                }
            }
        },

        copy: {
            dev: {
                files: {
                    'build/debug/manifest.json': 'manifest.json'
                }
            },
            prod: {
                files: {
                    'build/release/manifest.json': 'manifest.json'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify2');

    grunt.registerTask('dev', ['watch']);

    grunt.registerTask('default', [
        'browserify2:prod',
        'uglify:prod',
        'less:prod',
        'copy:prod'
    ]);

};