const http = require("http");
const html = "<h1>Hello World from Docker multi-stage build</h1>";

http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(html);
}).listen(8080, "0.0.0", () => console.log("Listening on 8080"));
