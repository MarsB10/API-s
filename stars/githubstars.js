var express = require('express'),
app = express(),
port = process.env.PORT || 3001;

function getEstrellas(req,res) {
    loadJSON('https://api.github.com/repos/Marsb10/paginaweb',
        function (data) { 
            res.send(data);
        },
        function (xhr) {
            console.error(xhr);
        }
    );
}

function loadJSON(path, res) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                var parse = JSON.parse(xhr.responseText);
                res('Nº de estrellas en repo "paginaweb" de Marsb10: ' + parse.stargazers_count);
            }
    };
    xhr.open("GET" , path , true);
    xhr.send();
}
app.get('/star',getEstrellas);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);