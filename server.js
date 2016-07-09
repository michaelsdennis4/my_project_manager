var express = require('express');
var session = require('express-session');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoDB = require('mongodb');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));

app.use(session({secret: 'H4URYB34H3HFI3UFI3IU',
    saveUninitialized: true,
    resave: true}));
app.use(express.static('public'));

var MongoClient = MongoDB.MongoClient;
var ObjectId    = MongoDB.ObjectID;
var mongoUri    = process.env.MLAB_URI_PROJECT_MANAGER;

var bcrypt = require('bcryptjs');

var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

MongoClient.connect(mongoUri, function(error, db) {
    if (error) {
        throw error;
    } else {
        console.log('connected to MongoDB');
    }

    app.post('/authenticate', function(req, res) {
        console.log(req.body);
        db.collection('users').find({email: req.body.email}).toArray(function(error, results) {
            if ((error) || (results.length == 0)) {
                res.json({message: 'Incorrect username/password'});
            }
            else {
                var user = results[0];
                console.log(user);
                if (bcrypt.compareSync(req.body.password, user.password_digest) === true) {
                    session = req.session;
                    session.user_id = user._id;
                    user.first_name = user.first_name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
                    user.last_name = user.last_name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
                    session.username = user.first_name +' '+user.last_name;
                    res.json({message: 'ok'});
                } else {
                    res.json({message: 'Incorrect username/password'});
                }
            }
        });
    });

    app.post('/users', function(req, res){
        db.collection('users').find({email: req.body.email}).toArray(function(error, users) {
            if (users.length > 0) {
                res.json({message: 'User already exists'});
            }
            else if (req.body.password != req.body.confirm_password) {
                res.json({message: 'Passwords do not match'});
            }
            else if (req.body.first_name.length === 0) {
                res.json({message: 'First name cannot be blank'});
            }
            else if (req.body.last_name.length === 0) {
                res.json({message: 'Last name cannot be blank'});
            } else if (req.body.email.length === 0) {
                res.json({message: 'Email cannot be blank'});
            }
            else if (req.body.password.length < 6) {
                res.json({message: 'Password must be at least 6 characters.'});
            }
            else {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);
                var new_user = {first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password_digest: hash};
                db.collection('users').insertOne(new_user, function(error, result) {
                    if ((!error) && (result)) {
                        session = req.session;
                        session.user_id = new_user._id;
                        new_user.first_name = new_user.first_name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
                        new_user.last_name = new_user.last_name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
                        session.username = new_user.first_name +' '+new_user.last_name;
                        res.json({message: 'ok'});
                    } else {
                        res.json({message: 'Error creating user'});
                    }
                });
            }
        });
    });

    app.get('/logout', function(req, res) {
        req.session.user_id = null;
        req.session.username = null;
        req.session.destroy(function(err) {
            if (err) {
                console.log(err);
                res.json({message: err});
            } else {
                res.json({message: 'ok'});
            }
        });
    });

});

module.exports = app;