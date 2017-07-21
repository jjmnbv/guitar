var gulp = require('gulp');
var bs = require('browser-sync').create();
var handlebars = require('gulp-compile-handlebars');
var layouts = require('handlebars-layouts');

layouts.register(handlebars.Handlebars);

gulp.task('bs', function() {
    bs.init({
        server: {
            baseDir: ['./build', './src', './mock', '../pub'],
            middleware: [
                function(req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });

    gulp.watch(['./build/**/*.html', './mock/**', './src/script/**', './src/static/**']).on('change', bs.reload);
});

gulp.task('bs-proxy', function() {
    bs.init({
        proxy: "http://localhost:8080",
        serveStatic: ['./build', './src', '../pub']
    });

    gulp.watch(['./build/**/*.html', './src/script/**', './src/static/**']).on('change', bs.reload);
});

gulp.task('build', function() {
    gulp.src('src/views/pages/**/*.html')
        .pipe(handlebars(
            {
                path: {
                    app: '/static/app/1.0.0',
                    deserialize: '/static/lib/jquery-deserialize/1.3.3',
                    google: '/static/lib/google',
                    handlebars: '/static/lib/handlebars/4.0.4',
                    html5shiv: '/static/lib/html5shiv/3.7.3',
                    metronic: '/static/lib/metronic/4.5.2'
                }
            },
            {
                ignorePartials: true,
                batch: ['./src/views/partials'],
                helpers: {
                    raw: function(options) { return options.fn(); }
                }
            }))
        .pipe(gulp.dest('build'));
});
