# liri-node-app

## Hosted on GitHub
 - https://github.com/cooploops/liri-node-app

## Description on how to use the app

This app is a Command Line Interface (CLI). There are 4 basic commands. To use the commands you'll need node.js and npm installed as well as the packages in the package.json file. All commands start with "node liri.js (command)". The four commands comprised in this app are "my-tweets", "spotify-this-song", "movie-this", and "do-what-it-says". my-tweets does not take an extra command and will grab the most recent 20 tweets of a specified user in the code (mine being Ryan Reynolds). spotify-this-song will provide details and a url to the song specified provided after this command i.e. "node liri.js spotify-this-song 'Immigrant Song'" will return info for Led Zeppelin's Immigrant Song. movie-this, similar to spotify-this-song, will return information about a movie that's specified after the command i.e. "node liri.js movie-this 'Iron Man'" will give information about the Iron Man movie. do-what-it-says will execute any of the above commands that's written in the random.txt file.

## Requirements

- Be able to take commands from the user and execute them

- Be able to provide information on the items specified after each command

- Be able to install node and npm and use them

## Technologies Used
- Node.js
- Javascript
- Moment.js
- Twitter API, Spotify API, OMDB API
- Request.js


## Code Explanation
### Overall Lesson Learned
- This HW helped me understand about node, npm, how the package.json works, how to better modularize code, and how to design an app with the MVC framework in mind.

### Specific Lessons Learned
- If there are spaces in an argument on the command line, make sure to put it in quotes so that it recognizes it as one whole argument vs multiple arguments spaced out.
-module.exports vs just labeling things as exports and requiring them in another file. Can import individual pieces of code or entire chunks as objects. Exports is just a property of module. 
