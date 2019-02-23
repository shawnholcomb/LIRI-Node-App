# LIRI - A Node.js Application

## Description

LIRI is similar to iPhone's SIRI, though while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

LIRI understands the following commands:

### "concert-this"

Utilizing the Bands In Town API, LIRI will search for a provided band and return concert location and dates.

![concert-this demo](https://media.giphy.com/media/lcSQfg5AcUu3gwF9J9/giphy.gif)

### "spotify-this-song"

Utilizing the Spotify APU, LIRI will search for a provided song and return the song title, album name and a preview link to the song on Spotify.  If no song is provided LIRI will default the one of the greatest songs of the 90's, "The Sign" from the Swedish powerhouse, *Ace of Base*. 

With song title<br/>
![spotify-this-song demo](https://media.giphy.com/media/1j9JaGUdSS8XrXgHZA/giphy.gif)!

Without song title<br/>
[spotify-this-song-not-title demo](https://media.giphy.com/media/AirgTRlZ0TH9xqmqwy/giphy.gif)

### "movie-this"**

Utilizing the OMDB API, LIRI will search for a provided movie and return the title, release year and ratings as well as a number of other details.  If no movie is provided LIRI will default to the movie *Mr. Robot*.

With movie title<br/>
![movie-this demo](https://media.giphy.com/media/TIiCfyliy61A2jViHj/giphy.gif)

Without movie title<br/>
![movie-this-no-titile demo](https://media.giphy.com/media/aJ2x4SdwXuJpVCqCs9/giphy.gif)

### "do-what-it-says"

Utilizing the FS Node package LIRI will read the following information, `spotify-this-song,"I Want it That Way"`, from the `random.txt` file and run the provided search against the provided case.

![do-what-it-says demo](https://media.giphy.com/media/lzoOoPn9UouACA8Uzh/giphy.gif)

LIRI also utilized the fsappendFile command to log all activity to a log.txt file.

![appendfile demo](https://media.giphy.com/media/kDWFxesYmrqeCfkzdl/giphy.gif)
