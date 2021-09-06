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

fromDir("./src/", /\.css$/, function (filename) {
	const dest = "dist" + filename.substring(3, filename.length);

	console.log("-- found: ", filename);
	fs.copyFileSync(filename, dest);
});
