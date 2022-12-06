const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
let date = Date();

fs.writeFileSync("textfile/date-time.txt", date);

http.createServer((req, res) => {
    fs.readFile("textfile/date-time.txt", (err, data) => {
        res.writeHeader(200, ["content-type", "text/html"]);
        res.write(data);
        res.end();
    });
})

app.listen(6000);
