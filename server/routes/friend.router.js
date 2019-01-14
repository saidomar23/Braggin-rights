const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    const queryString = `INSERT INTO "friend_list" ("user_id" , "friend_id") VALUES ($1 , $2)`
    pool.query(queryString , [req.body.userID , req.body.friendID]).then( (result) => {
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log(`Error on query ${error}`);
        res.sendStatus(500);
    }) 
})


module.exports = router;