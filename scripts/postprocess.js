var path = require("path"),
	fs = require("fs");

function fromDir(startPath, filter, callback) {
	//console.log('Starting from dir '+startPath+'/');

	if (!fs.existsSync(startPath)) {
		console.log("no dir ", startPath);
		return;
	}

	var files = fs.readdirSync(startPath);
	for (var i = 0; i < files.length; i++) {
		var filename = path.join(startPath, files[i]);
		var stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			fromDir(filename, filter, callback); //recurse
		} else if (filter.test(filename)) callback(filename);
	}
}
// Copy CSS files from /src to /dist
// fromDir("./src/", /\.css$/, function (filename) {
// 	const dest = "dist" + filename.substring(3, filename.length);

// 	console.log("-- Copied: ", filename);
// 	fs.copyFileSync(filename, dest);
// });

// Delete stories.d.ts files
fromDir("./dist/", /\.stories.d.ts$/, function (filename) {
	console.log("-- Deleting: ", filename);
	fs.unlinkSync(filename);
});
