var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
   
function tiempo(req,res){
    const time = new Date();
    const horas = time.getHours();
    const minutos = time.getMinutes();
    const seg = time.getSeconds();

    res.send('Hora: ' + horas + ':' + minutos + ':' + seg);
}

app.get('/time',tiempo);
app.listen(port);



console.log('todo list RESTful API server started on: ' + port);