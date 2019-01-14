
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gameSearchRouter = require('./routes/search.router')
const gameArchiveRouter = require('./routes/archive.router')
const gamePageRouter = require('./routes/game.router')
const userSearchRotuer = require('./routes/usersearch.router')
const friendRouter = require('./routes/friend.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/search', gameSearchRouter)
app.use('/api/games', gameArchiveRouter)
app.use('/api/game', gamePageRouter)
app.use('/api/usersearch' , userSearchRotuer)
app.use('/api/friend' , friendRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
