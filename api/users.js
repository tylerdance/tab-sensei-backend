require('dotenv').config();
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const JWT_SECRET = process.env.JWT_SECRET

const db = require('../models')

router.get('/test', (req, res) => {
    res.json({ message: 'User endpoint' })
})

// POST api/users/register (Public route)
router.post('/register', (req, res) => {
    // find user by email
    db.User.findOne({ email: req.body.email })
    .then(user => {
        // if email already exists, send a 400 response
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' })
        } else {
            // create new user
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                image_url: req.body.image
            })
            // Salt and hash the password, then save the user
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw Error;
                bcrypt.hash(newUser.password, salt, (error, hash) => {
                    if (error) throw Error;
                    // change password in new User to the hash
                    newUser.password = hash;
                    newUser.save()
                    .then(createdUser => res.json(createdUser))
                    .catch(err => console.log(err));
                })
            })
        }
    })
})

// POST api/users/login (public)
router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    // find user via email
    db.User.findOne({ email })
    .then(user => {
        // check if there is NOT a user
        console.log(user);
        if (!user) {
            res.status(400).json({ msg: 'User not found'})
        } else {
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    console.log(isMatch);
                    const payload = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    }
                    // sign token
                    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`,
                        })
                    })
                } else {
                    return res.status(400).json({ msg: 'Email or password is incorrect' })
                }
            })
        }
    })
})

// GET api/users/current (private)
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    })
})

router.get('/tabs/:tabid', (req, res) => {
    // const name = req.params.name;
    db.User.find({ "comments.songsterr_id" : req.params.tabid })
    .then((user) => {
      res.status(201).json({ user })
      // console.log();
    }).catch((error) => res.send({ error }))
})

router.post('/tabs/addsong', (req, res) => {
 
    db.User.update(
      { email: req.body.email },
      { $push:
        { "song_list":
          { "songsterr_id": req.body.tab_id,
            "title": req.body.title,
            "artist": [{"name": req.body.artist}]}
          }
        }
      ).then((response) => {
        res.status(201).json({ response })
      }).catch((error) => res.send({ error }))
  })




  router.post('/tabs/comments', (req, res) => {
    const currentSong = req.body.tab_id;
    const content = req.body.content;
    const email = req.body.email;
    const date=req.body.time;
    
    // comment from a comment field in req.body
    db.User.update(
      { email: email },
      
      { $push:
        { "comments": { "songsterr_id": currentSong, "content": content, "date": date, "email": email }}
      }
    ).then((response) => {
      res.status(201).json({ response })
    }).catch((error) => res.send({ error }))
  })

  router.post('/profile/setup/image', (req, res) => {
    const email = req.body.email;
    db.User.update(
      { email: email },
      { $set: { "image_url": req.body.image_url }
      }
    ).then((response) => {
      res.status(201).json({ response })
    }).catch((error) => res.send({ error }))
  })

  router.get('/myphoto/:id', (req,res)=>{
      db.User.find({ email: req.params.id }).then((user) => {
        res.status(201).json({ user })
      }).catch((error) => res.send({ error }))
    })
  
router.get('/mytabs/:id', (req, res) => {
        db.User.find({ email: req.params.id }).then((user) => {
          res.status(201).json({ user })
        }).catch((error) => res.send({ error }))
      })   
 
      router.put('/profile/comments/delete', (req, res) => {
        // Attach an event to a given comment that pulls the _id from the JSON data that's already there
        // user[0].comments[i]._id
        let mongoId = req.body._id;
        db.User.update(
          { email: req.body.email }, { $pull: { "comments": { "_id": mongoId } }}
        ).then((response) => {
          res.status(201).json({ response })
        }).catch((error) => res.send({ error }))
      })  
      
      router.put('/profile/tablist/delete', (req, res) => {
        // Attach an event to a given comment that pulls the _id from the JSON data that's already there
        // user[0].comments[i]._id
        let mongoId = req.body._id;
        db.User.update(
          { email: req.body.email }, { $pull: { "song_list": { "_id": mongoId } }}
        ).then((response) => {
          res.status(201).json({ response })
        }).catch((error) => res.send({ error }))
      }) 

      router.get('/songlist/:id', (req, res) => {
        db.User.find({ email: req.params.id }).then((response) => {
          res.status(201).json({ response })
        }).catch((error) => res.send({ error }))
      })

module.exports = router;
/////////////////////////