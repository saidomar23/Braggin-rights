const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')


router.get('/' , (req, res)=>{
    const id = req.user.id
    const queryString = `SELECT "person".id, "favorite_list".game_id FROM "favorite_list"
    JOIN "person" ON "favorite_list".user_id = "person".id
    WHERE "person".id = $1;`;
    pool.query(queryString , [id]).then( results => {
//3rd party calls    
const games = []
let favorites = results.rows
for(let i=0; i< favorites.length; i++){
            axios.get(` https://www.giantbomb.com/api/game/${favorites[i].game_id}/?api_key=${process.env.GIANTBOMB_API_KEY}&format=json`)
    .then(response => {
        games.push(response.data.results)
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
     })
    } 
   setTimeout(() => {
   res.send(games)
   }, 7000)
    
}).catch( (error) => {
        console.log(`Error in favorite query ${error}`);
        res.sendStatus(500);
    }) 
})

router.delete('/:id' , (req , res)=>{
    let id = req.params.id
    const queryString = `DELETE FROM "favorite_list" WHERE "game_id" = $1` 
    pool.query(queryString , [id]).then(results =>{
        res.sendStatus(204)
    }).catch( (error) => {
        console.log(`Error in delete favorite query ${error}`);
        res.sendStatus(500);
    }) 
})

module.exports = router