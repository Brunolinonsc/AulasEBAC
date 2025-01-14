module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })
    // Tarefa 
    grunt.registerTask('olaGrunt', function(){
        const done = this.async();
        setTimeout(function(){
            console.log('Ola grunt')
        }, 3000)
    })
    // Tarefa default 
    grunt.registerTask('default', ['olaGrunt']);
}