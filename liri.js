var keys = require("./keys.js");
const twitter = require("twitter");
const Spotify = require('node-spotify-api');
const request = require("request");

var client = new twitter({
    consumer_key:keys.twitterKeys.consumer_key,
    consumer_secret:keys.twitterKeys.consumer_secret,
    access_token_key:keys.twitterKeys.access_token_key,
    access_token_secret:keys.twitterKeys.access_token_secret
});

var spotify = new Spotify({
    id:keys.spotifyKeys.client_id,
    secret:keys.spotifyKeys.client_secret
});

var command = process.argv[2];

switch(command){

    case "my-tweets":
    client.get('statuses/user_timeline',{screen_name:'@VancityReynolds',count:'20'},function(err, tweets, response){
        if(err){
            console.log(err);
        }
        tweets.forEach(function(tweets,i){
            console.log(i + " " + tweets.text)
        });
        console.log("status code " + response.statusCode);
    });
    break;

    case "spotify-this-song":
    let songName = process.argv[3];
    spotify.search({type:'track', query:songName, limit:"3"},function(err,data){
      if(err){
          console.log("Error occurred " + err)
      }
    //   data.forEach(function(data,i){
    //       console.log(i + " " + data)
    //   })
      
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album: " + data.tracks.items[0].album.name);

    //   console.log("Artist: " + data.tracks.items[1].artists[0].name);
    //   console.log("Song Name: " + data.tracks.items[1].name);
    //   console.log("Preview Link: " + data.tracks.items[1].external_urls.spotify);
    //   console.log("Album: " + data.tracks.items[1].album.name);

    //   console.log("Artist: " + data.tracks.items[2].artists[0].name);
    //   console.log("Song Name: " + data.tracks.items[2].name);
    //   console.log("Preview Link: " + data.tracks.items[2].external_urls.spotify);
    //   console.log("Album: " + data.tracks.items[2].album.name);

    })
    break;

    case "movie-this":
    let movieName = process.argv[3];
    let year = process.argv[4]
    request("http://www.omdbapi.com/?t="+movieName+"&type=movie&y="+year+"&plot=short&apikey=40e9cece",function(error,response,body){
        if(error){
            console.log("Error: " + error);
        }
        // console.log(response);
        // console.log(JSON.parse(body));
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Title: " + JSON.parse(body).Country);
        console.log("Title: " + JSON.parse(body).Language);
        console.log("Title: " + JSON.parse(body).Plot);
        console.log("Title: " + JSON.parse(body).Actors);
    })

}