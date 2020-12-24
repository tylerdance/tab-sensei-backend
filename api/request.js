require('dotenv').config();
const { default: Axios } = require('axios');
const express = require('express')
const router = express.Router()
const cors = require('cors');
const YOU_TUBE_API_KEY=process.env.YOU_TUBE_API_KEY
// router.get('/test', (req, res) => {
//     res.json({ message: 'Over' })
// })



// router.get('/:id', (req, res)=>{
//     // res.json({ message: 'User endpoint' })
//     console.log(req)
//     // Axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${id}`)
//     // .then(response=>{response.data}).catch(err=>{console.log(err)})
    
// })

router.get('/:id', (req, res) => {
//     res.send('Hello!')
//     fetch("http://www.songsterr.com/a/ra/songs.json?pattern=thriller")
//     .then((apiRes)=>{
//         apiRes.json().then((json)=>{
//             res.json(json)
//         })
//     })
   Axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${req.params.id}`)
    .then(response=>{res.json(response.data)}).catch(err=>{console.log(err)})

})

router.get('/youtube/:id', (req, res) => {
    //     res.send('Hello!')
    //     fetch("http://www.songsterr.com/a/ra/songs.json?pattern=thriller")
    //     .then((apiRes)=>{
    //         apiRes.json().then((json)=>{
    //             res.json(json)
    //         })
    //     })
       Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=guitar+tutorial+${req.params.id}&type=video&key=${YOU_TUBE_API_KEY}`)
        .then(response=>{res.json(response.data); console.log(response)}).catch(err=>{console.log(err)})
    
    })



module.exports = router;

