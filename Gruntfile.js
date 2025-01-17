module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'main.css' : 'main.less'
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },

    })
    // Tarefa default 
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('build', ['concurrent']);
}