var Parser = require('jison').Parser;

var grammar = {
    "lex": {
        "rules": [
           ["\\s+", "/* skip whitespace */"],
           ["[0-9]+(?:\\.[0-9]+)?\\b", "return 'NUMBER';"],
           ["f", "/* skip function declaration */"],
           ["\\*", "return '*';"],
           ["\\/", "return '/';"],
           ["-", "return '-';"],
           ["\\+", "return '+';"],
           ["\\^", "return '^';"],
           ["\\(", "return '(';"],
           ["\\)", "return ')';"],
           ["PI\\b", "return 'PI';"],
           ["E\\b", "return 'E';"],
           ["A\\b", "return 'A';"],
           ["x\\b", "return 'x';"],
           ["D2R\\b", "return 'D2R';"],
           ["$", "return 'EOF';"]
        ]
    },

    "operators": [
        ["left", "+", "-"],
        ["left", "*", "/"],
        ["left", "^"],
        ["left", "UMINUS"]
    ],

    "bnf": {
        "expressions" :[[ "e EOF",   "return $1;"  ]],

        "e" :[[ "e + e",   "$$ = $1 + $3;" ],
              [ "e - e",   "$$ = $1 - $3;" ],
              [ "e * e",   "$$ = $1 * $3;" ],
              [ "e / e",   "$$ = $1 / $3;" ],
              [ "e ^ e",   "$$ = Math.pow($1, $3);" ],
              [ "- e",     "$$ = -$2;", {"prec": "UMINUS"} ],
              [ "( e )",   "$$ = $2;" ],
              [ "NUMBER",  "$$ = Number(yytext);" ],
              [ "E",       "$$ = Math.E;" ],
              [ "D2R",       "$$ = (180 / Math.PI);" ],
              [ "A",       "$$ = 6378137;" ],
              [ "x",       "$$ = x;" ],
              [ "PI",      "$$ = Math.PI;" ]]
    }
};

var parser = new Parser(grammar, {
    debug: true
});


var fs = require('fs');

parser.parse(fs.readFileSync('merc.num', 'utf-8'));

fs.writeFile('src/parser.js', parser.generate());
