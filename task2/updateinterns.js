var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbConnect = db.db("adepojuadeyemi11");
  var myquery = { movie: "The Banker" };
  var newvalues = {$set: {movie: "Shaolin Soccer",year:"2007", rating:11} };
  dbConnect.collection("myMovies").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified);
});
    dbConnect.collection("myMovies").find({}).toArray(function(err, res) {

        if (err) throw err;
        console.log(res);
        
  });
  db.close();
});