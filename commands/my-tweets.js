var keys = require("./../keys.js");
const twitter = require("twitter");
const request = require("request");
const moment = require("moment");

var client = new twitter({
    consumer_key:keys.twitterKeys.consumer_key,
    consumer_secret:keys.twitterKeys.consumer_secret,
    access_token_key:keys.twitterKeys.access_token_key,
    access_token_secret:keys.twitterKeys.access_token_secret
});

function tweet () {
    client.get('statuses/user_timeline',{screen_name:'@VancityReynolds',count:'20'},function(err, tweets, response){
        if(err){
            console.log(err);
        }
        tweets.forEach(function(tweets,i){
            console.log("#" + (i+1) + " " + tweets.text)
            console.log("Tweeted at " + moment(new Date(tweets.created_at)).format("DD MMM YYYY hh:mm a"));
            console.log("\n");
        });
    });
}

module.exports = tweet;