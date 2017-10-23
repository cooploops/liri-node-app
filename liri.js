var keys = require("./keys.js");
const twitter = require("./commands/my-tweets.js");
const spotify = require('./commands/spotify-this-song.js');
const omdb = require("./commands/movie-this.js");
const inquirer = require("inquirer");
const fs = require("fs");


// var client = new twitter({
//     consumer_key:keys.twitterKeys.consumer_key,
//     consumer_secret:keys.twitterKeys.consumer_secret,
//     access_token_key:keys.twitterKeys.access_token_key,
//     access_token_secret:keys.twitterKeys.access_token_secret
// });

// var spotify = new Spotify({
//     id:keys.spotifyKeys.client_id,
//     secret:keys.spotifyKeys.client_secret
// });

var command = process.argv[2];
var input = process.argv[3];

switch(command){

    case "my-tweets":
    twitter();
    // client.get('statuses/user_timeline',{screen_name:'@VancityReynolds',count:'20'},function(err, tweets, response){
    //     if(err){
    //         console.log(err);
    //     }
    //     tweets.forEach(function(tweets,i){
    //         console.log("#" + (i+1) + " " + tweets.text)
    //         console.log("Tweeted at " + tweets.created_at);
    //         console.log("\n");
    //     });
    // });
    break;

    case "spotify-this-song":
    spotify(input);
    // let songName = process.argv[3] != undefined ? process.argv[3] : "The Sign";
    // spotify.search({type:'track', query:songName, limit:"10"},function(err,data){
    //   if(err){
    //       console.log("Error occurred " + err)
    //   }

    //   if(songName === "The Sign"){
    //     console.log("Artist: " + data.tracks.items[5].artists[0].name);
    //     console.log("Song Name: " + data.tracks.items[5].name);
    //     console.log("Preview Link: " + data.tracks.items[5].external_urls.spotify);
    //     console.log("Album: " + data.tracks.items[5].album.name);
    //     console.log("");
    //   }
      
    //   console.log("Artist: " + data.tracks.items[0].artists[0].name);
    //   console.log("Song Name: " + data.tracks.items[0].name);
    //   console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
    //   console.log("Album: " + data.tracks.items[0].album.name);

    // })
    break;

    case "movie-this":
    omdb(input);
    // let movieName = process.argv[3] != undefined ? process.argv[3] : "Mr. Nobody"; 
    // let year = process.argv[4]
    // request("http://www.omdbapi.com/?t="+movieName+"&type=movie&y="+year+"&plot=short&apikey=40e9cece",function(error,response,body){
    //     if(error){
    //         console.log("Error: " + error);
    //     }
    //     console.log("Title: " + JSON.parse(body).Title);
    //     console.log("Release Year " + JSON.parse(body).Year);
    //     console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
    //     console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    //     console.log("Produced in: " + JSON.parse(body).Country);
    //     console.log("Available in these languages: " + JSON.parse(body).Language);
    //     console.log("Plot: " + JSON.parse(body).Plot);
    //     console.log("Actors: " + JSON.parse(body).Actors);
    // });
    break;

    case "do-what-it-says":
    fs.readFile("random.txt","utf8", function(err, text){
        if (err){
            console.log("Error: " + err);
        }
        textArr = text.split(",");
        let sayCommand = textArr[0];
        let sayInput = textArr[1];

        switch(sayCommand){
            case "my-tweets":
            twitter();
            break;

            case "spotify-this-song":
            spotify(sayInput);
            break;

            case "movie-this":
            omdb(sayInput);
            break;
        }

    });
    break;


}