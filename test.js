var nunjucks = require('nunjucks');
var env = new nunjucks.Environment();
var issue61 = env.getTemplate('issue61.html');
console.log('ISSUE #61: two levels of super should work');
try {
  console.log(issue61.render({ }));
  console.log("Seems to have worked. You should see layout1, layout2 and test mentioned.\n");
} catch (e) {
  console.log('Exception thrown:');
  console.log(e);
}

var issue62 = env.getTemplate('issue62.html');
console.log('ISSUE #62: escaping a number should work');
try {
  console.log(issue62.render({ number: 5 }));
  console.log("Seems to have worked. You should see 5.\n");
} catch (e) {
  console.log('Exception thrown:');
  console.log(e);
}
