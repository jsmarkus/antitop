module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify2: {
            // options: {},
            dev: {
                entry: './index',
                compile: './build/index.js',
                debug: true
            },
            prod: {
                entry: './index',
                compile: './build/index.js',
                debug: false
            }
        },

        less: {
            dev: {
                // options : {
                // paths : ['less']
                // },
                files: {
                    'build/style.css': 'less/app.less'
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
            all: {
                files : {
                    'build/manifest.json':'manifest.json'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify2');

    grunt.registerTask('default', ['browserify2:dev']);

};