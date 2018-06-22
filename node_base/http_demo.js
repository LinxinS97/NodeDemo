'use strict'

// 导入http模块
var http = require('http');

// 创建http server，并传入回调函数
var server = http.createServer( (req, res) => {
    console.log(req.method + ':' + req.url);
    // 将http相应200写入response，同时设置content-type/html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // 将http相应的HTML内容写入response
    res.end('<h1>Hello World!</h1>')
})

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080')