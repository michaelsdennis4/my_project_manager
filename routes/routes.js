var express = require('express');
var router = express.Router();

var MongoDB     = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectId    = MongoDB.ObjectID;
var mongoUri    = process.env.MLAB_URI_PROJECT_MANAGER;

console.log('connecting to MongoDB');
MongoClient.connect(mongoUri, function(error, db) {
    if (error) throw error;


});

module.exports = router;

