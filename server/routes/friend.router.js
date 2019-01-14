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

router.get('/:id' , (req, res)=>{
    const id = req.params.id
    const queryString = `SELECT a.id , a.username as user1, b.username as user2 FROM "person" as a
    JOIN "friend_list" ON a.id = "friend_list".user_id
    JOIN "person" as b ON "friend_list".friend_id = b.id
    WHERE a.id = $1;`;
    pool.query(queryString , [id]).then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error in friend query ${error}`);
        res.sendStatus(500);
    }) 
})


module.exports = router;