var path = require("path");
var args = require('yargs').argv
var gulp = require('gulp');
var bs = require('browser-sync').create();
var handlebars = require('gulp-compile-handlebars');
var layouts = require('handlebars-layouts');

layouts.register(handlebars.Handlebars);

gulp.task('bs', function () {
    bs.init({
        server: {
            baseDir: ['./build', './src', './mock', '../pub'],
            middleware: [
                function (req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });
    gulp.watch(['./build/**/*.html', './mock/**', './src/script/**', './src/static/**']).on('change', bs.reload);
});

/**
 * 配置代理
 */
gulp.task('bs-proxy', function () {
    bs.init({
        proxy: "http://localhost:8080/login",
        /*proxy: "http://169.254.142.240:8080",*/
        serveStatic: ['./build', './src', '../pub']
    });
    gulp.watch(['./build/**/*.html', './src/script/**', './src/static/**']).on('change', bs.reload);
});

gulp.task('build', function () {
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
                    raw: function (options) { return options.fn(); }
                }
            }))
        .pipe(gulp.dest('build'));
});

+ function (prjname, deproot, profile) {
    var
        wwwconf = path.resolve(deproot, 'conf', 'www', profile),
        wwwdist = path.resolve(deproot, 'dist', 'www'),
        sharedconf = path.resolve(wwwconf, 'shared'),
        prjconf = path.resolve(wwwconf, prjname),
        prjdist = path.resolve(wwwdist, prjname),
        steps = [
            /**
             * 拷贝库文件
             */
            function () {
                return gulp.src('../pub/**').pipe(gulp.dest(path.resolve(prjdist, 'wwwroot')));
            },
            /**
             * 拷贝模拟数据
             */
            function () {
                return gulp.src('mock/**').pipe(gulp.dest(path.resolve(prjdist, 'wwwroot')));
            },
            /**
             * 拷贝动态脚本挡板
             */
            function () {
                return gulp.src('src/script/**').pipe(gulp.dest(path.resolve(prjdist, 'wwwroot', 'script')));
            },
            /**
             * 拷贝项目静态内容
             */
            function () {
                return gulp.src('src/static/**').pipe(gulp.dest(path.resolve(prjdist, 'wwwroot', 'static')));
            },
            /**
             * 拷贝组装（编译）完的页面
             */
            function () {
                return gulp.src('build/**').pipe(gulp.dest(path.resolve(prjdist, 'wwwroot')));
            },
            /**
             * 拷贝共享配置
             */
            function () {
                return gulp.src(sharedconf + '/**').pipe(gulp.dest(prjdist));
            },
            /**
             * 拷贝项目配置
             */
            function () {
                return gulp.src(prjconf + '/**').pipe(gulp.dest(prjdist));
            }
        ],
        step = function (i) {
            //返回步骤个数
            if (i < 0) {
                return steps.length;
            }
            //返回步骤处理函数
            return steps[i];
        },
        n = step(-1);

    //通过任务依赖保证步骤顺序执行
    gulp.task('dist-0', ['build'], step(0));
    for (var i = 1; i < n; i++) {
        gulp.task('dist-' + i, ['dist-' + (i - 1)], step(i));
    }
    //发布操作依赖前面的所有步骤顺序
    gulp.task('dist', ['dist-' + (n - 1)], function () { });

}(path.basename(__dirname), path.resolve('..', '..', '..', 'dep'), args.activeProfile || 'test');
