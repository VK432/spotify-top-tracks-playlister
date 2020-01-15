/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */

var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/public'));


app.get('/redirect',
    (req, res) => {
        res.sendFile(__dirname + '/public/playlist_creator.html');

    });

console.log('Listening on 8888');
app.listen(process.env.PORT || 5000);