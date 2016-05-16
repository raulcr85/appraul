module.exports = function(grunt) {
	'use strict';
	grunt.file.mkdir("D:/xampp/htdocs/appraul");
	grunt.initConfig({
		
		copy : {
			main: {
				files : [
					{expand: true, src : ['main.html'], dest : 'output'},
					{expand: true, src : ['bower_components/**'] , dest : 'output'}
				]
			}
		},
		
		clean : {
			folder : ['output']
		},
		
		exec : {
			copyOutput : {
				command : 'xcopy /y /e output\\* d:\\xampp\\htdocs\\appraul',
				exitCode : 0
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-exec");
	
	grunt.registerTask("default" , ['clean', 'copy', 'exec:copyOutput'] );
	
};

