const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbConnect = db.db("adepojuadeyemi11");
  dbConnect.createCollection("myMovies", function(err, res) {
    if (err) throw err;
    console.log("Movies collection created");
    var movies = [ 
      {movie: "The Banker", year: "2020", rating: 8}, 
    {movie: "Bad Boys", year: "2020", rating: 7}, 
    {movie: "The Hunt", year: "2020", rating: 7}, 
    {movie: "Bloodshot", year: "2020", rating: 7.5}, 
    {movie: "First Cow", year: "2020", rating: 6.5} 
  ]
   dbConnect.collection("myMovies").insertMany(movies, function(err, res) {
     if (err) throw err;
     console.log(res); 
          db.close();
   });
  });
});

