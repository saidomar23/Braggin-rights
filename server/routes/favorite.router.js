const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')


router.get('/:id' , (req, res)=>{
    const id = req.params.id
    const queryString = `SELECT "person".id, "favorite_list".game_id FROM "favorite_list"
    JOIN "person" ON "favorite_list".user_id = "person".id
    WHERE "person".id = $1;`;
    pool.query(queryString , [id]).then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error in friend query ${error}`);
        res.sendStatus(500);
    }) 
})
router.get('/:id', (req, res) => {
    let id = req.params.id;
    axios.get(` https://www.giantbomb.com/api/game/${id}/?api_key=${process.env.GIANTBOMB_API_KEY}&format=json`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
})

module.exports = router