var express = require('express')
var app = express()
var youtube = require('./lib/js/youtubeAPI.js')
app.use('/', express.static(__dirname))

app.get('/search', youtube.search)

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
