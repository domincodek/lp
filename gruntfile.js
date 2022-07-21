'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			custom: {
				files: {
					'assets/js/custom.js': ['source/js/custom.js']
				}
			},
		},
		cssmin: {
			global: {
				files: {
					'assets/css/global.css': ['source/tmp/global.css']
				}
			}
		},
		sass: {
			global: {
				files: {
					"source/tmp/global.css": ['source/scss/global.scss'],
				}
			}
		},
		watch: {
			styles: {
				files: ['source/scss/**/*.scss'],
				tasks: ['sass', 'cssmin:global']
			},
			scripts: {
				files: ['source/js/*.js'],
				tasks: ['uglify:custom']
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('all', ['sass', 'cssmin', 'uglify']);
}