
const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message" ><button>Submit</button></form></body>');
        res.write('</html>');
        res.end;
    }
    if (url === "/message" && method=="POST") {

        const body =[];

        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        return req.on('end' , ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt' , message , err=> {
                res.statusCode= 302 ;
                res.setHeader('Location' , '/')
                res.end();
            });
        })
    }

});

server.listen(4000);
