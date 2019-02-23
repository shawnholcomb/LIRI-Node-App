# LIRI-Node-App

# Description

LIRI is similar to iPhone's SIRI, though while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

LIRI understands the following commands:

**"concert-this"**<br/>
Utilizing the Bands In Town API, LIRI will search for a provided band and return concert location and dates.

![concert-this demo](http://i68.tinypic.com/vzvjlz.gif)

**"spotify-this-song"**<br/>
Utilizing the Spotify APU, LIRI will search for a provided song and return the song title, album name and a preview link to the song on Spotify.  If no song is provided LIRI will default the one of the greatest songs of the 90's, "The Sign" from the Swedish powerhouse, *Ace of Base*. 


**"movie-this"**<br/>
Utilizing the OMDB API, LIRI will search for a provided movie and return the title, release year and ratings as well as a number of other details.  If no movie is provided LIRI will default to the movie *Mr. Robot*.

![movie-this demo](http://i63.tinypic.com/znlxrn.gif)

**"do-what-it-says"**<br/>
Utilizing the FS Node package LIRI will read the following information from the random.txt file and run the provided search against the provided case **spotify-this-song,"I Want it That Way"**.

LIRI also utilized the fsappendFile command to log all activity to a log.txt file.

![appendfile demo]()
