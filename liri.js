// Required modules for app
require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Grab command line arguments
var type = process.argv[2];
var search = process.argv.splice(3).join(" ");

// Switch based on user input
switch (type) {
    case "concert-this":
        concertThis()
        break;
    case "spotify-this-song":
        spotifyThis()
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis();
        break;
}

// Function for grabbing BandsInTown data
function concertThis() {
    var artist = search;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                var details = response.data;
                details.forEach(function (element) {
                    var date = moment(element.datetime).format('L');
                    var concertResponse = "Venue: " + element.venue.name + "\nLocation: " + element.venue.city + ", " + element.venue.region + " " + element.venue.country + "\nDate: " + date + "\n------------------------------\n";
                    console.log(concertResponse);
                    fs.appendFile("log.txt", concertResponse, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    })
                })
            });
};

// Function for grabbing Spotify data
function spotifyThis() {
    var song;
    if (!search) {
        song = "The Sign Ace of Base";
        getSong();
    } else {
        song = search;
        getSong();
    };

    function getSong() {
        spotify
            .search({ type: 'track', query: song })
            .then(function (response) {
                var artist = JSON.stringify(response.tracks.items[0].artists[0].name);
                var song = JSON.stringify(response.tracks.items[0].name);
                var album = JSON.stringify(response.tracks.items[0].album.name);
                var preview = JSON.stringify(response.tracks.items[0].artists[0].external_urls.spotify);
                var songResponse = "Artist: " + artist + "\nSong Title: " + song + "\nAlbum Name: " + album + "\nPreview Link: " + preview + "\n------------------------------\n";
                console.log(songResponse);
                fs.appendFile("log.txt", songResponse, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
            })
            .catch(function (err) {
                console.log(err);
            });
    }
};

// Function for grabbing Movie data from OMDB
function movieThis() {
    var movie;
    if (!search) {
        movie = "Mr. Nobody";
        getMovie();
    } else {
        movie = search;
        getMovie();

    }

    function getMovie() {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
            .then(
                function (response) {
                    var details = response.data;
                    var movieResponse = "Title: " + details.Title + "\nYear: " + details.Year + "\nIMDB Rating: " + details.Ratings[0].Value + "\nRotten Tomatoes Rating: " + details.Ratings[1].Value + "\nCountry: " + details.Country + "\nLanguage: " + details.Language + "\nPlot: " + details.plot + "\nActors: " + details.Actors + "\n------------------------------\n";
                    console.log(movieResponse);
                    fs.appendFile("log.txt", movieResponse, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    })
                });
    }
};

// Function for random command
function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            var randomArr = data.split(",");
            search = randomArr[1];
            spotifyThis();
        }
    });
}