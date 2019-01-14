const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


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

router.post('/', (req,res)=>{
    queryString = `INSERT INTO "favorite_list" ("user_id" , "game_id") VALUES ($1, $2);`
    pool.query(queryString , [req.body.user_id , req.body.game_id]).then( (result) => {
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log(`Error on query ${error}`);
        res.sendStatus(500);
    }) 
})


module.exports = router;