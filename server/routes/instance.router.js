const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    let id = req.user.id
    let game_id = req.body
    const queryString = `INSERT INTO "instances" ("user_id" , "game_id") VALUES ($1 , $2)`
    pool.query(queryString, [id, game_id.game_id]).then((result) => {
        res.sendStatus(200);
    })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        })
})


router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "instances" ORDER BY "id" DESC LIMIT 1
`
    pool.query(queryString).then(results => {
        res.send(results.rows)
    }).catch(error => {
        console.log('error in instance get route', erro);
    })
})

module.exports = router;