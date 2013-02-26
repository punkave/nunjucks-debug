var nunjucks = require('nunjucks');
var env = new nunjucks.Environment();
var tmpl = env.getTemplate('test.html');
console.log(tmpl.render({ }));
