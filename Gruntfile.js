module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		typescript: {
			base: {
			src: ['./Scripts/**/*.ts'],
			dest: './Components/app.js',
			options: {
				module: 'amd',
        		watch: true
				}
			}
		}, 
		concat:{
			options:{
				separator: ';'
			},
			js:{
				src:[
					'./node_modules/jquery/dist/jquery.min.js',
					'./node_modules/angular/angular.min.js',
					'./node_modules/angular-route/angular-route.min.js',
					'./node_modules/bootstrap/dist/js/bootstrap.min.js',	
				],
				dest: './Components/components.js'
			},
			css:{
				src:[
						'./node_modules/bootstrap/dist/css/bootstrap.min.css'
					],
					dest: './Components/app.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'typescript']);
}