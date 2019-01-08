const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    axios.get(`https://www.giantbomb.com/api/games?api_key=${process.env.GIANTBOMB_API_KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;