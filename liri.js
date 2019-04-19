require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var bandsintown = new bandsintown(keys.bandsintown);



