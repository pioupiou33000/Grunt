module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'src/css/global.css': 'src/scss/global.scss' // 'destination': 'source'

                }
            }
        },
        concat: {

            dist: {
                src: ['src/javascript/*.js'],
                dest: 'src/js/production.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/javascript/*.js', 'src/scss/*.scss', 'src/*.html'],
                tasks: ['sass', 'concat'],
                options: {
                    spawn: false,
                }
            }
        },
        browserSync: {
                bsFiles: {
                    src: ['src/css/**/*.css', 'src/js/**/*.js', 'src/*.html']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./src/"
                    }
                }
            }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task(s).
    grunt.registerTask('default', ['browserSync', 'sass', 'concat', 'watch']);
};