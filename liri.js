require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var bandsintown = new bandsintown(keys.bandsintown);

function concert-this(){



}



axios.get("http://www.omdbapi.com/?t=" + movie + "&ye&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("Name:" + response.data.Title);
        console.log("Release Year:" + response.data.Year);
        console.log("IMDB rating is:" + response.data.imdbRating);
        console.log("Rotten Tomatoes rating is: " + response.data.rottentomatoesrating);
        console.log("Country Produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    }
);

inquirer
    .prompt([
        {
            type: "input"

        }
    ])