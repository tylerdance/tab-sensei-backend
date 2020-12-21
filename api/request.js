require('dotenv').config();
const { default: Axios } = require('axios');
const express = require('express')
const router = express.Router()
const cors = require('cors');

// router.get('/test', (req, res) => {
//     res.json({ message: 'Over' })
// })



// router.get('/:id', (req, res)=>{
//     // res.json({ message: 'User endpoint' })
//     console.log(req)
//     // Axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${id}`)
//     // .then(response=>{response.data}).catch(err=>{console.log(err)})
    
// })

router.get('/test', (req, res) => {
//     res.send('Hello!')
//     fetch("http://www.songsterr.com/a/ra/songs.json?pattern=thriller")
//     .then((apiRes)=>{
//         apiRes.json().then((json)=>{
//             res.json(json)
//         })
//     })
   Axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=thriller`)
    .then(response=>{res.json(response.data)}).catch(err=>{console.log(err)})

})

module.exports = router;

