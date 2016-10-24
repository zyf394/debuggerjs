var fs = require('fs');
var path = require('path');
var sourceMap = require('source-map');
var mapData;

fs.readFile(path.resolve(__dirname, 'test.map'), 'utf8', function (err, file) {
    mapData = file;
    var consumer = new sourceMap.SourceMapConsumer(JSON.parse(mapData));

    console.log(consumer.originalPositionFor({ line: 2, column: 10 }))
})