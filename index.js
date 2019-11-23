const express = require('express');
const http = require('http');

const hostName = 'localhost';
const Port = 3000;

const app = express();

app.use((req, res, next) => {
    console.log(req.hostname);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body>This is Express Server</body></html>')
})
http.createServer(app).listen(Port, hostName, () => {
    console.log(`Server running http://${hostName}:${Port}`);
})