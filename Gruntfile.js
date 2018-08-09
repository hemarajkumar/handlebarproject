module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
        images: {
          expand: true,
          cwd: '_ui-src/web/webroot/images',
          src:'**/*',
          dest: 'web/webroot/_ui/images/'
        },
		themejs: {
          expand: true,
          cwd: '_ui-src/web/webroot/js/theme/',
          src:'**/*',
          dest: 'web/webroot/_ui/js/theme/'
        },
		commonjs: {
          expand: true,
          cwd: '_ui-src/web/webroot/js/common/',
          src:'**/*',
          dest: 'web/webroot/_ui/js/common/'
        },
		commoncss: {
          expand: true,
          cwd: '_ui-src/web/webroot/css/common/',
          src:'**/*',
          dest: 'web/webroot/_ui/css/common/'
        }
    },
    clean: {
       images: ["web/webroot/_ui/images"]
    },
    jshint: {
       options: {
           "-W041": false,
           "asi" : true,
           "-W069": false,
           "expr": true,
           "strict": false,
           "unused": false,
           "scripturl":true,
           "globals": {
               "jQuery": true
           }
       },
       all: ['_ui-src/web/webroot/js/theme/*.js']
    },
	watch: {
		less: {
			files: ["_ui-src/web/webroot/less/*.less"],
			tasks: ["less"], 
			options: {
				nospawn: true
			}
		}
	},
	less: {
        build: {
			options: {
				compress: true,
				yuicompress: false,
				optimization: 2,
				cleancss:false,  
				paths: ["css"],   
                    syncImport: false,
                    strictUnits:false,
                    strictMath: true,
                    strictImports: true,
                    ieCompat: false    
                },
			files: {
				"web/webroot/_ui/css/theme/main.css": "_ui-src/web/webroot/less/styles.less"
			}		
		}
	}
  });

  /** Plugin's */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  /** Default task(s) */
  /*grunt.registerTask('default', ['less', 'sync', 'clean', 'copy']); */
  
  grunt.registerTask('default', ['less', 'clean', 'copy', 'watch', 'sync']);
};
