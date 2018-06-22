const fs = require('fs')

function addMapping(router, mapping) {
    for(let url in mapping){
        if(url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if(url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if(url.startsWith('DELETE ')) {
            let path = url.substring(7);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`)
        }
    }
}

function addControllers(router, dir) {
    let files = fs.readdirSync(__dirname + '/' + dir);
    let js_files = files.filter((f) => {
        return f.endsWith('.js');
    });
    
    js_files.forEach(f => {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    })
}

module.exports = function (dir) {
    // 如果不传参数默认扫描 controllers
    let controllers_dir = dir || 'controllers',
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};