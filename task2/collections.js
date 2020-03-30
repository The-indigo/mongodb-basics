const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbConnect = db.db("adepojuadeyemi11");
  dbConnect.createCollection("interns", function(err, res) {
    if (err) throw err;
    console.log("Interns collection created");
    db.close();
  });
});