const request = require("request");

function omdbThis(input) {
    let movieName = input != undefined ? input : (process.argv[3] != undefined ? process.argv[3] : "Mr. Nobody"); 
    let year = process.argv[4]
    request("http://www.omdbapi.com/?t="+movieName+"&type=movie&y="+year+"&plot=short&apikey=40e9cece",function(error,response,body){
        if(error){
            console.log("Error: " + error);
        }
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Produced in: " + JSON.parse(body).Country);
        console.log("Available in these languages: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    });
}

module.exports = omdbThis;
