const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
   console.log(req.body);
   
    const queryString = `INSERT INTO "stats" ("player_id" , "round" , "win/loss") VALUES ($1 , $2 , $3)`
    pool.query(queryString, [req.body.player , req.body.round , req.body.stat]).then((result) => {
        res.sendStatus(200);
    })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        })
})

router.get('/' , (req, res)=>{
    console.log(req.body);
    
    const queryString = `SELECT a.id , a.username ,b.id, b.username, "instances".id, "instances".user_id , "instances".game_id, "stats".id, "stats".player_id, "stats".round, "stats"."win/loss" FROM "person" as a
    JOIN "instances" ON a.id = "instances".user_id
    JOIN "stats" ON "instances".id = "stats".round 
    JOIN "person" as b ON "stats".player_id = b.id
    WHERE "instances".id=$1;`
    pool.query(queryString , [req.body.id]).then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error in results query ${error}`);
        res.sendStatus(500);
    }) 
})

module.exports = router;