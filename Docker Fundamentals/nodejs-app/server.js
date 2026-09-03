const http = require("http");

const port = process.env.PORT || 3000;
http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello World from Node.js</h1>");
}).listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));
