var keys = require("./keys.js");
const twitter = require("./commands/my-tweets.js");
const spotify = require('./commands/spotify-this-song.js');
const omdb = require("./commands/movie-this.js");
const inquirer = require("inquirer");
const fs = require("fs");

var command = process.argv[2];
var input = process.argv[3];

switch(command){

    case "my-tweets":
    twitter();
    break;

    case "spotify-this-song":
    spotify(input);
    break;

    case "movie-this":
    omdb(input);
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