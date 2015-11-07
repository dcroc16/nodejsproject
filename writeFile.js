// my attempt to write to a file with node js

var fs = require('fs');

fs.writeFile('writeTest.txt','a bunch of important data', function( err ){
	if (err) throw err;
	console.log('finished writing out to text file');
	console.log(__dirname);
});


