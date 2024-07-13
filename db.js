const mongoose = require('mongoose');

//define the MongoDb connection Url
const mongoURL = 'mongodb://localhost:27017/hotels' //Replace hotels with our database name

//set up mongodb connections
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

//get the default connections
//mongoose maintain a default connections object representing object the mongodb connection 
const db = mongoose.connection;

//define event listener for database connection
db.on('connected', () => {
    console.log("connected to MongoDB server");
});

db.on('error', () => {
    console.log("Connection Error");
});

db.on('disconnected', () => {
    console.log("MongoDB server Disconnected");
});

//Export the database connection
module.exports = db;