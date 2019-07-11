import gulp from 'gulp';
import clean from 'gulp-clean'
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { config } from './webpack.config';

/**
 * bundler is the webpack build config
 */

let bundler = webpack(config);

/**
 * bs is an instance of browser sync
 */

let bs = browserSync.create();

/**
 * clean cleans defined folders/paths
 */

gulp.task('clean', function() {
  let srcs = [
    './dist/*'
  ];

  return gulp.src(srcs).pipe(clean({force: true}));
});

/**
 * copy:html copies html files to dist
 */

gulp.task('copy:html', () => {
  return gulp.src([
    'src/index.html'
  ])
    .pipe(gulp.dest('dist/'));
});

/**
 * copy:assets copies asset files to dist
 */

gulp.task('copy:assets', () => {
  return gulp.src([
    'src/assets/**'
  ])
    .pipe(gulp.dest('dist/'));
});

/**
 * webpack compiles files via webpack
 */

gulp.task('webpack', async function() {
  await buildWebpack(config);
});

/**
 * build is are full suite build task
 */

gulp.task('build', gulp.series(
  'clean',
  'copy:html',
  'copy:assets',
  'webpack'
), () => {
  done();
});

/**
 * dev is our development browsersync'd taks
 */

gulp.task('dev', gulp.series('build', () => {
  bs.init({
    server: {
      baseDir: './dist',
      middleware: [
        webpackDevMiddleware(bundler, {
          hot: true,
          filename: 'bundle.js',
          publicPath: config.output.publicPath,
          stats: {colors: true},
          historyApiFallback: true,
          // watchOptions: {
          //   aggregateTimeout: 300,
          //   poll: 1000
          // }
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    files: [
      '**/*.html',
      '**/images/**/*'
    ],
    port: (process.env.BROWSERSTACK_PORT || 8888),
    open: false
  });
  watch(['src/**/*.html'], ['copy:html']);
  watch(['src/assets/**/*'], ['copy:assets']);
}));


/**
 * watch is a wrapper around gulp watch on 'change'
 *
 * @param {Multiple} src (string or array of string srcs)
 * @param {Multiple} t (tasks/functions to run, multiple tasks should be given as an array)
 * @param {Object} opts (options to provide to watch)
 * @api private
 */
function watch(src, t, opts) {
  if (!(t instanceof Array)) {
    t = [t];
  }

  gulp.watch(src, (opts || {})).on('change', gulp.series.apply(null, t));
};

/**
 * buildWebpack wraps webpack in a promise
 *
 * @param {Object} conf
 * @return {Promise}
 * @api private
 */

function buildWebpack(conf) {
  return new Promise(function(resolve, reject) {
    webpack(conf, function(err, stats) {
      if (err) {
        return reject(err);
      }

      console.log('[webpack]', stats.toString());
      resolve();
    });
  });
}

