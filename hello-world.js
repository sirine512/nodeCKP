var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
}).listen(3000, () => {
  console.log("Server is listening on port 3000");
});
fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(data.toString());
});
