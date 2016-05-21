module.exports = function(grunt) {
	'use strict';
	grunt.file.mkdir("c:/wamp64/www/appraul");
	grunt.initConfig({
		
		copy : {
			main: {
				files : [
					{expand: true, src : ['index.html'], dest : 'output'},
					{expand: true, src : ['bower_components/**'] , dest : 'output'}
				]
			},
			index : {
				files : [
					{expand: true, src : ['index.html'], dest : 'output'}
				]
			}
		},
		
		clean : {
			folder : ['output']
		},
		
		exec : {
			copyOutput : {
				command : 'xcopy /y /e output\\* c:\\wamp64\\www\\appraul',
				exitCode : 0
			},
			
			copyIndex : {
				command : 'xcopy /y /e output\\index.html c:\\wamp64\\www\\appraul',
				exitCode : 0
			}
			
		}
	});
	

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-exec");
	
	grunt.registerTask("default" , ['clean', 'copy:main', 'exec:copyOutput'] );
	grunt.registerTask("index" , [ 'copy:index', 'exec:copyIndex'] );
	
};

