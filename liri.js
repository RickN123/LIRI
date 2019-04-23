require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var bandsintown = new bandsintown(keys.bandsintown);

axios.get("http://www.omdbapi.com/?t=" + movie + "&ye&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("Name:")
        console.log("Release Year:" + response.data.Year);

        console.log("IMDB rating is:" + response.data.imdbRating);

        console.log("Rotten Tomatoes rating is ")

    }
);

inquirer
    .prompt([
        {
            type: "input"

        }
    ])