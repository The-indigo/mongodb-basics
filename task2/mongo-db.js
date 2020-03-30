var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/adepojuadeyemi11";
MongoClient.connect(url, function(err, db) {
     if (err) throw err;
      console.log("Database created by adepojuadeyemi11!"); 
      db.close();
})
