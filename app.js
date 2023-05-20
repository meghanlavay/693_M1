const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html')
});

let port = 5000;
app.listen(port, function() {
    console.log('server listening on port ' + port);
});