require('dotenv').config();
const { default: Axios } = require('axios');
const express = require('express')
const router = express.Router()
const cors = require('cors');
const YOU_TUBE_API_KEY=process.env.YOU_TUBE_API_KEY


router.get('/:id', (req, res) => {
   Axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${req.params.id}`)
    .then(response=>{res.json(response.data)}).catch(err=>{console.log(err)})

})

router.get('/youtube/:id', (req, res) => {
       Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=guitar+tutorial+${req.params.id}&type=video&key=${YOU_TUBE_API_KEY}`)
        .then(response=>{res.json(response.data); console.log(response)}).catch(err=>{console.log(err)})
    
    })



module.exports = router;

