build:
	node parser.js

test:
	mocha -r should test.js
