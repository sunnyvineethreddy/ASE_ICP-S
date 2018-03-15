var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://vineeth1:1234@ds125896.mlab.com:25896/icp9';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});