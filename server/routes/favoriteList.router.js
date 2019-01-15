const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
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