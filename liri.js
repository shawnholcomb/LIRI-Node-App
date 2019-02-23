// Required modules for app
require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var type = process.argv[2];
var search = process.argv.splice(3).join(" ");

switch (type) {
    case "concert-this":
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
                })
        break;

    case "spotify-this-song":
        var song;
        if (!search) {
            song = "The Sign"
        } else {
            song = search;
            spotify
                .search({ type: 'track', query: song })
                .then(function (response) {
                    var songResponse = (response)
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
        break;
    case "movie-this":
        var movie;
        if (!search) {
            movie = "Mr. Nobody";
        } else {
            movie = search;
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
        break;
        
    case "do-what-it-says":
        console.log("whatever"); // function goes here
        break;
} 