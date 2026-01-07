// console.log(global === globalThis);

const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/pathway"){
        res.end("there is nothing");
    }
    res.end("chala ja bsdk");
});

server.listen(3013, ()=>{
    console.log("server listen at port 3013");
});