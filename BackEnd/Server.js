const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//set the database url as a var and connect to it with mongoose
const mongoDB = "mongodb+srv://steven:london97@cluster0-7iigw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//Allow the app to access the local server
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())
//add a schema

const Schema = mongoose.Schema;

//store data in both schema
const DriverSchema = new Schema({
    driverName: String,
    driverFirstSeason: String,
    driverLastSeason: String,
    driverF1Record: String,
    driverPicture: String
})
const TeamSchema = new Schema({
    teamName: String,
    teamFirstSeason: String,
    teamLastSeason: String,
    teamF1Record: String,
    teamLogo: String
})

app.get('/', (req, res) => res.send('Hello World!'))


//Create model for both to add and delete data from the 2 databases in a collection
const DriverModel = mongoose.model('driver', DriverSchema);
const TeamModel = mongoose.model('team', TeamSchema);

//get data from both the driver and team collections in database
app.get('/api/driver', (req, res) => {

    DriverModel.find((error, data) => {
        res.json({ driver: data })
    })
})
app.get('/api/team', (req, res) => {

    TeamModel.find((error, data) => {
        res.json({ team: data });
    })
})
//Get data,edit the stored data and delete the data for the driver 
app.get('/api/driver', (req, res) => {
    DriverModel.find((error, data) => {
        res.json({ driver: data });
    })
})

app.get('/api/driver/:id', (req, res) => {
    console.log(req.params.id);
    DriverModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.delete('/api/driver/:id', (req, res) => {
    console.log(req.params.id);

    DriverModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})
app.put('/api/driver/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    DriverModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

app.get('/api/driver/:id', (req, res) => {
    console.log("GET:" + req.params.id);

    DriverModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Get data,edit the stored data and delete the data for the team 
app.get('/api/team', (req, res) => {
    TeamModel.find((error, data) => {
        res.json({ driver: data });
    })

})

app.get('/api/team/:id', (req, res) => {
    console.log(req.params.id);

    TeamModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.delete('/api/team/:id', (req, res) => {
    console.log(req.params.id);

    TeamModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})
app.put('/api/team/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    TeamModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

app.get('/api/team/:id', (req, res) => {
    console.log("GET:" + req.params.id);

    TeamModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Using DriverModel and TeamModel to send data to database and create a collection to store that data
app.post('/api/driver', (req, res) => {
    console.log('Driver Recieved')
    console.log(req.body);
    console.log(req.body.driverName);
    console.log(req.body.driverFirstSeason);
    console.log(req.body.driverLastSeason);
    console.log(req.body.driverF1Record);
    console.log(req.body.driverPicture);

    DriverModel.create({
        driverName: req.body.driverName,
        driverFirstSeason: req.body.driverFirstSeason,
        driverLastSeason: req.body.driverLastSeason,
        driverF1Record: req.body.driverF1Record,
        driverPicture: req.body.driverPicture
    });
    res.json('post recieved!');
})

app.post('/api/team', (req, res) => {
    console.log('Team Recieved')
    console.log(req.body);
    console.log(req.body.teamName);
    console.log(req.body.teamFirstSeason);
    console.log(req.body.teamLastSeason);
    console.log(req.body.teamF1Record);
    console.log(req.body.teamLogo);
    TeamModel.create({
        teamName: req.body.teamName,
        teamFirstSeason: req.body.teamFirstSeason,
        teamLastSeason: req.body.teamLastSeason,
        teamF1Record: req.body.teamF1Record,
        teamLogo: req.body.teamLogo
    });
    res.json('post recieved!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))