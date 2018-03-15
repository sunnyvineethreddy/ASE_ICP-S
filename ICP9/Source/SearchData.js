/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://vineeth1:1234@ds125896.mlab.com:25896/icp9';

var findUserwithPhone = function(db,callback) {
    var cursor = db.collection('userdetails').find({"mobile":"+1 816-682-6735"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("User Name:" + doc.userID);
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.city);
        }
    });
}

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var database = client.db('icp9');
    findUserwithPhone(database, function() {
        client.close();
    });
});