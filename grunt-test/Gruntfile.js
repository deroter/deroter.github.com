module.exports = function(grunt) {
  grunt.initConfig({
    csso: {
    options: {
      restructure: false,
      banner: '/* Copyleft */'
    },
    dev: {
      files: {
        "css-out/min.css": ["css-in/a.css", "css-in/b.css"]
      }
    },
    prod: {
      options: {
        restructure: true
      },
      files: [
        {src: 'css-in/a.css', dest: 'css-out/a.css'},
        {src: 'css-in/b.css', dest: 'css-out/b.css'}
      ]
    }
  },
    watch: {
      files: ['css_in/*.css'],
      tasks: ['csso']
    }
  });

  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-watch');
};