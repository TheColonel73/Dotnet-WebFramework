/// <binding AfterBuild='copy' />
module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["wwwroot/libs/*", "temp/"],
        copy: {
            js: {
                expand: true,
                flatten: true,
                cwd: "./node_modules",
                dest: "./wwwroot/libs/js/",
                src: ["./jquery/dist/jquery.js",
                    "./jquery-validation/dist/jquery.validate.js",
                    "./jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js",
                    "./bootstrap/dist/js/*",
                    "./luxon/build/global/luxon.js"
                ]
            },
            css: {
                expand: true,
                flatten: true,
                cwd: "./node_modules",
                dest: "./wwwroot/libs/css/",
                src: ["./bootstrap/dist/css/*"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-copy');
};