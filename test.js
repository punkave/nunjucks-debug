var nunjucks = require('nunjucks');
nunjucks.configure('.');
var s = nunjucks.render('macro-with-include.html', { name: 'james' });
console.log('Should look like: FooInclude james');
console.log(s);
