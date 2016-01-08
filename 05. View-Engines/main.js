var http = require('http'),
    jade = require('jade'),
    path = require('path'),
    url = require('url'),
    fs = require('fs'),
    data = require('./data');

http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url);

    function renderHtml(filePath) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.readFile(filePath, 'utf-8', function(err, content) {
            if (err) throw err;
            var template = jade.compile(content, {
                filename: filePath
            });

            var output = template(data);
            res.end(output);
        });
        return;
    }

    if (req.url === '/home' || req.url === '/') {
        renderHtml('views/home.jade');
    } else if (req.url === '/phones') {
        renderHtml('views/phones.jade');
    }else if (req.url === '/tablets'){
        renderHtml('views/tablets.jade');
    }else if (req.url === '/wearables'){
        renderHtml('views/wearables.jade');
    } else {
        res.write('404 not found!');
        res.end();
    }

}).listen(3000);

console.log('Server is running on port ' + 3000);
