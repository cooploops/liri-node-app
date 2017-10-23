const keys = require("./../keys.js");
const Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id:keys.spotifyKeys.client_id,
    secret:keys.spotifyKeys.client_secret
});
function spotifyThis (input){
    let songName = input != undefined ? input : (process.argv[3] != undefined ? process.argv[3] : "The Sign");
    spotify.search({type:'track', query:songName, limit:"10"},function(err,data){
      if(err){
          console.log("Error occurred " + err)
      }
    
      if(songName === "The Sign"){
        console.log("Artist: " + data.tracks.items[5].artists[0].name);
        console.log("Song Name: " + data.tracks.items[5].name);
        console.log("Preview Link: " + data.tracks.items[5].external_urls.spotify);
        console.log("Album: " + data.tracks.items[5].album.name);
        console.log("");
      } else {      
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album: " + data.tracks.items[0].album.name);
      }
    });
}

module.exports = spotifyThis;
