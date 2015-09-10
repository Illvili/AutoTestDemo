module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		coffee: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/qsort.coffee"],
				dest: "dist/qsort.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["dist/qsort.js"]
		},

		// Minify definitions
		uglify: {
			dist: {
				src: ["dist/qsort.js"],
				dest: "dist/qsort.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		},


		// test
		karma: {
			unit: {
				options: {
					frameworks: ['jasmine'],
					singleRun: true,
					browsers: ['PhantomJS'],
					files: [
						"dist/qsort.js",
						"spec/qsortSpec.js"
					],
					
					reporters: ['progress','coverage'],
					preprocessors : {'dist/qsort.js': 'coverage'},
					coverageReporter: {
						dir: 'dist/reports/coverage',
						reporters: [
							{ type: 'html', subdir: 'report-html' },
							{ type: 'lcov', subdir: 'report-lcov' }
						]
					}
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-karma");

	grunt.registerTask("build", ["coffee", "uglify"]);
	grunt.registerTask("default", ["build", "jshint"]);
	grunt.registerTask("test", ["default", "karma"]);
	grunt.registerTask("travis", ["test"]);

};
