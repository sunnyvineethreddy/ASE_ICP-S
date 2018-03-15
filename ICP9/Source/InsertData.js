var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://vineeth1:1234@ds125896.mlab.com:25896/icp9';

var insertDocument = function(db, callback) {
    db.collection('userdetails').insertMany([
        {
            "userID":"sunnyvineethreddy1",
            "fname" : "vineeth",
            "lname" : "reddy",
            "city":"Kansas City",
            "mobile":"+1 816-682-6730"
    },
        {
            "userID":"sunnyvineethreddy2",
            "fname" : "vineeth",
            "lname" : "reddy",
            "city":"Kansas City",
            "mobile":"+1 816-682-6731"
        },
        {
            "userID":"sunnyvineethreddy3",
            "fname" : "vineeth",
            "lname" : "reddy",
            "city":"Kansas City",
            "mobile":"+1 816-682-6732"
        },
    {
        "userID":"sunnyvineethreddy",
        "fname" : "vineeth",
        "lname" : "reddy",
        "city":"Kansas City",
        "mobile":"+1 816-682-6735"
    },
        function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the userdetails collection.");
        callback();
    }]);
};
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var database = client.db('icp9')
    insertDocument(database, function() {
        client.close();
    });
});