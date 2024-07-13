const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Welcone to my hotel");
});


//Import Router
const Personrouter = require('./routs/person_routs');
app.use('/person', Personrouter);

const menurouter = require('./routs/menu_router');
app.use('/menu', menurouter);

app.listen(3000, () => {
    console.log("connected to 3000 port.");
});