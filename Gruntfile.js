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
                    },
                    {
                        cwd: "node_modules/angular/",
                        src: "angular.js",
                        expand: true,
                        dest: "target/exploded/js/"
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
            js: {
                files: [
                    {
                        cwd: "src/main/js/",
                        src: "**",
                        filter: "isFile",
                        expand: true,
                        dest: "target/exploded/js/"
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
                files: ["src/main/html/**"],
                tasks: ["copy:html"],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ["src/main/css/**"],
                tasks: ["copy:css"],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ["src/main/js/**"],
                tasks: ["copy:js"],
                options: {
                    spawn: false
                }
            }
        }
    });

    //shorthands
    grunt.registerTask('rebuild', ['clean', 'copy']);
    grunt.registerTask('run', ['connect:exploded', 'watch']);
    grunt.registerTask('default', 'rebuild');
};