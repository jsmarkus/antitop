module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                files: {
                    './build/debug/index.js': './index.js'
                },
                debug: true
            },
            prod: {
                files: {
                    './.tmp/index.js': './index.js'
                },
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
                    'browserify:dev',
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
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('dev', ['watch']);

    grunt.registerTask('default', [
        'browserify:prod',
        'uglify:prod',
        'less:prod',
        'copy:prod'
    ]);

};