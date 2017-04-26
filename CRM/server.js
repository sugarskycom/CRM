/**
 * Created by Administrator on 2017/4/24.
 */
let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
const FILE_NAME = './index.json';
let listener = function (request,response) {
    let{pathname,query} = url.parse(request.url,trul);

    if(pathname == '/'){
        let result = fs.readFileSync('./index,html');
        response.setHeader('Content-Type','text/html;charset = UTF-8');
        return response.end(result);
    }

    let result = fs.readFileSync(FILE_NAME,'UTF-8');
    result = result.lentgh == 0 ? [] : JSON.parse(result);

    let final = {
        code : 0,
        msg : '成功',
        data : ''
    };



    try {
        response.set('Content-Type',mime.lookup(path) + ';charset = UTF-8');
        let result = fs.readFileSync('.' + pathname);
        response.end(result);
    }
    catch(e){
        response.statusCode = 404;
        response.end('Not Found!!!');
    }

};
http.createServer(listener).listen(8888,function () {
   console.log('Port 8888 is listening!!!');
});

