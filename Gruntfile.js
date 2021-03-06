module.exports = function(grunt) {
  var path = require("path");
      deploy_dir = 'dist' ;
  grunt.initConfig({
    pkg: require('./package.json'),
    manifest : require('./manifest.json'),
    deploy_dir : grunt.option('deploy_dir') || deploy_dir,
    absolute_root : path.resolve(__dirname)
  });

  grunt.file.expand({filter:'isDirectory'}, 'grunt/**').forEach(grunt.loadTasks);
  grunt.log.writeln("Working in '%s'", grunt.config('deploy_dir'));

 // default task is to init dev env
  grunt.registerTask('default', [
    'cssmin',
    'concat'
  ]);

  grunt.registerTask('deploy', [
    'cssmin',
    'concat'
  ]);
};
