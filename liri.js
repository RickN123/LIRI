require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var search = process.argv[2];
var artist = process.argv.slice(3).join(" ").toLowerCase();
console.log("Search:" + search);
console.log("Artist:" + artist);

if (search == "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("Name:" + response.data[0].lineup[0]);
            console.log("Venue Location:" + response.data[0].venue.name);
            console.log("Date:" + moment(response.data[0].datetime).format('MM/DD/YYYY'));
        }
    ).catch(function (err) {
        console.log(err)
    })


}

if (search == "movie-this") {


    axios.get("http://www.omdbapi.com/?t=" + artist + "&ye&plot=short&apikey=trilogy").then(
        function (response) {
            console.log(response);
            console.log("Name:" + response.data.Title)
            console.log("Release Year:" + response.data.Year);
            console.log("IMDB rating is:" + response.data.imdbRating);
            console.log("Rotten Tomatoes rating is: " + response.data.Ratings[0].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    ).catch(function (err) {
        console.log(err)
    })
}

if (search == "spotify-this") {

    spotify.search({ type: 'track', query: artist }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Track: " + data.tracks.items[0].name);
        console.log("Album: " + data.album[0].name);
        console.log("Song Preview: " + data.preview_url[0]);

    });
}


// inquirer
//     .prompt([
//         {
//             type: "input"

//         }
//     ])