/*
Express Handlebars Warmup:
- Works similar to Vue.js (330), *except* the rendering is happening 
on the server-side instead of the client-side

Reference:
- handlebars:
  - https://handlebarsjs.com
  - https://www.npmjs.com/package/express-handlebars
  - https://github.com/ericf/express-handlebars
- express:
  - https://www.npmjs.com/package/express
  - https://expressjs.com/en/api.html
*/

'use strict';

// 1 - import stuff
const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();

// 2 - set the "template engine"
// http://expressjs.com/en/4x/api.html#app.engine
// here it will  use a layout by default (a layout is a "super template")
// A layout is simply a Handlebars template with a {{{body}}} placeholder. 
// Usually it will be an HTML page wrapper into which views will be rendered.
app.engine('handlebars', handlebars());

// 3 - Setting the app's "view engine" setting will make that value 
// the default file extension used for looking up views
// https://expressjs.com/en/api.html#app.set
app.set('view engine', 'handlebars');

// 4 - here's the default '/' route
app.get('/', function (req, res) {
	// res.render takes a name of a page to render.
	// you don't need .handlebars because you registered the file type as handlebars above
  // calling res.render('home')
  // actually calls home.handlebars
  // https://expressjs.com/en/api.html#res.render
  res.render('home', {
    'pageHeading': "Main Page",
    'siteTitle': "Intro to Handlebars"
  });
});

// Other page.
app.get('/other', function(req, res) {
  res.render('other', {
    'pageHeading': "Other Page",
    'siteTitle': "Intro to Handlebars",
    'colors': [ 'red', 'green', 'blue' ],
    'person': {
      'name': 'Festus',
      'age': 99
    }
  });
});

// Favorites page.
app.get('/favorites', function(req, res){
  res.render('favorites', {
    'pageTitle': "Favorites",
    'siteTitle': "Intro to Handlebars",
    'companies': [
      { 'name': "Nintendo", 'url': "https://www.nintendo.com/" },
      { 'name': "Insomniac Games", 'url': "https://insomniac.games/" },
      { 'name': "Respawn Entertainment", 'url': "https://www.respawn.com/" },
      { 'name': "Ubisoft", 'url': "https://www.ubisoft.com/en-us/" }    ]
  });
});

// 5 - start listening
app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
