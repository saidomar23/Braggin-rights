const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    const queryString = `SELECT "username", "id"  FROM "person" WHERE "username" ILIKE $1`
    pool.query(queryString , [`%${id}%`]).then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error on query ${error}`);
        res.sendStatus(500);
    }) 
})


module.exports = router;