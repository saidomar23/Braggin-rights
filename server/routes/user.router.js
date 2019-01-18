const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const bio = req.body.bio

  const queryText = 'INSERT INTO person (username, password , bio) VALUES ($1, $2 , $3) RETURNING id';
  pool.query(queryText, [username, password , bio])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/bio' , (req , res)=>{
  let id = req.user.id
  let bio = req.body
  let queryString = `UPDATE "person"
  SET "bio" = $1
  WHERE "id" = $2;`
  pool.query(queryString , [bio.bio , id ]).then(results =>{
    res.sendStatus(200)
}).catch( (error) => {
    console.log(`Error in update user query ${error}`);
    res.sendStatus(500);
}) 
})

module.exports = router;
