const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const routes = require('./routes');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

// Routes

// Home
app.get('/', routes.home);

// movie_single
app.get('star_wars_episode/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);

app.listen(3000, function () {
  console.log("The application is running on localhost:3000");
});