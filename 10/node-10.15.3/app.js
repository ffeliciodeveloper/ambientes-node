var express = require('express');
var app = express();

app.get("/", function (req, res) {
	res.send("Test");
});

app.get("/api", function (req, res) {
	res.send("Test 2");
});

app.get("/api/1", function (req, res) {
	res.send("Test 3 aaaaa");
});

//Porta de escuta do servidor
app.listen(3000, function() {
	console.log('Funcionando');
});