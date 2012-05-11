var parser = require('./parser'),
    fs = require('fs');

var source = fs.readFileSync(process.argv[1], 'utf8');
var ast = parser.parse(source);
console.log(ast);
