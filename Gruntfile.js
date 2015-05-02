module.exports = function (grunt) {

    "use strict";

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        clean: ["target"],
        copy: {
            libs: {
                files: [
                    {
                        cwd: "node_modules/normalize.css/",
                        src: "normalize.css",
                        expand: true,
                        dest: "target/exploded/css/"
                    }
                ]
            },
            html: {
                files: [
                    {
                        cwd: "src/main/html/",
                        src: "**",
                        filter: "isFile",
                        expand: true,
                        dest: "target/exploded/"
                    }
                ]
            },
            css: {
                files: [
                    {
                        cwd: "src/main/css/",
                        src: "**",
                        filter: "isFile",
                        expand: true,
                        dest: "target/exploded/css/"
                    }
                ]
            },
            javascript: {
                files: [
                    {
                        cwd: "src/main/jacascript/",
                        src: "**",
                        filter: "isFile",
                        expand: true,
                        dest: "target/exploded/javascript/"
                    }
                ]
            }
        },
        connect: {
            exploded: {
                options: {
                    port: 6666,
                    base: "target/exploded/"
                }
            }
        },
        watch: {
            html: {
                files: ['src/main/html/**'],
                tasks: ['copy:html'],
                options: {
                    spawn: false
                }
            }
            //css: {
            //
            //},
            //javascript: {
            //
            //}
        }
    });

    //shorthands
    grunt.registerTask('rebuild', ['clean', 'copy']);
    grunt.registerTask('run', ['connect:exploded', 'watch']);
    grunt.registerTask('default', 'rebuild');
};