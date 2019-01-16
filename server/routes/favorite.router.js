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
console.log(results.rows);
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
   }, 10000)
    
}).catch( (error) => {
        console.log(`Error in friend query ${error}`);
        res.sendStatus(500);
    }) 
})


module.exports = router