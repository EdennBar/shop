const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { default: axios } = require("axios");
const saltRounds = 10;

app.use(express.json());
app.use(express.static('public'))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    proxy: true,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: '',
    insecureAuth: true
});

app.get("/login", cors(), (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })

    } else {
        res.send({ loggedIn: false })
    }
})

db.connect();
app.post('/login', cors(), (req, res) => {
    const email = req.body.email;

    const pass = req.body.pass;


    db.query("SELECT * FROM  shop.user WHERE email=?;", email,
        (err, results) => {
            if (err) {
                res.send({ err: err });
            }

            if (results.length > 0) {
                bcrypt.compare(pass, results[0].pass, (error, response) => {
                    if (response) {
                        req.session.user = results;
                        console.log(req.session.user);
                        res.send(results)
                    } else {
                        res.send({ message: "wrong username/password combination" });
                    }
                })

            } else {
                res.send({ message: "user doesnt exist" });
            }


        });
})

app.post('/register', cors(), (req, res) => {

    const email = req.body.email;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const pass = req.body.pass;
    const id = 0;
    function between(id) {
        var min = 1;
        var max = 1000000000;
        id = Math.floor(

            Math.random() * (max - min) + min
        )
        return id;
    }
    bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query("INSERT INTO shop.user (id, email ,first_name ,last_name ,pass) VALUES (?,?,?,?,?)", [between(id), email, fname, lname, hash], (err, results) => {
            console.log(err);
        });

    })

});

app.post('/catalogsearch', cors(), function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    results = [{

        "id": 1,
        "category": "Jordan 1 high",
        "sneakerName": "AIR JORDAN 1 HIGH ZOOM 'RACER BLUE",
        "imageUrl": "https://cdn.flightclub.com/1500/TEMPLATE/164667/1.jpg",
        "size": [
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47
        ],
        "price": 200
    },
    {
        "id": 2,
        "category": "Jordan 1 high",
        "sneakerName": "WMNS AIR JORDAN 1 HIGH OG 'COURT PURPLE",
        "imageUrl": "https://cdn.flightclub.com/1500/TEMPLATE/191046/1.jpg",
        "size": [
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47
        ],
        "price": 160
    }]
    res.send(JSON.stringify(results));
});

app.use(express.static('public'));


app.listen(3001, function () {
    console.log('My app is listening on port 3001!');
});