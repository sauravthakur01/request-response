const fs = require("fs");

const routsHandeler = (req,res)=>{
    const method = req.method;
    const url = req.url;
    if (url === "/") {
      fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write(`<body> ${data} </body>`);
        res.write(
          '<body><form action="/message" method="POST" ><input type="text" name="message" ><button>Submit</button></form></body>'
        );
        res.write("</html>");
        return res.end();
      });
    }
    if (url === "/message" && method == "POST") {
      const body = [];
  
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    }
}
// module.exports = routsHandeler;

// module.exports = {
//     handler:routsHandeler,
//     text:'some text' 
// }

// module.exports.handler = routsHandeler ;
// module.exports.text = 'some text'

 exports.handler = routsHandeler ;
 exports.text = 'some text' ; 