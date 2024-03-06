var express = require('express');
var mysql = require('mysql');

var config = {
  host     : 'db',
  user     : 'root',
  password : 'root',
  database : 'project_db'
}

var connection = mysql.createConnection(config);
var app = express();

app.get('/', function (req, res) {
  connection.query('SELECT * FROM names', function (error, results, fields) {
    if (error) res.status(500).send(error);
    var body = '<body><h1>Full Cycle Rocks!</h1>';
    results.forEach((r) => {
      body += `<h3>${r.user}</h3>`;
    });
    body += '</body>';
    res.send(`<html>${body}</html>`);
  });
});

app.get('/insert', function (req, res) {
  var query = `INSERT INTO names(user) VALUES('Novo')`;
  connection.query(query);
  res.send(`<html><h1>Inserido com sucesso!</h1></html>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
 
