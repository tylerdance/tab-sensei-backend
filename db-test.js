const models = require('./models/');
models.User.create({
  name: "lev",
  email: "lev@gmail.com",
  password: "$2aw45795y789eh9g9eEeEQW.u0w9amX.7/FBhit50Oimd82u4.cFi.IN6lPYcmW",
  userProfile: {
    username: "lev",
    primary_inst: "guitar",
    stage_name: "lev_the_man",
    comments: [{
      songsterr_id: 27,
      content: "this is a great tab"
    }],
    song_list: [{
      songsterr_id: 25,
      title: 'Helene Et Les Garcons',
      artist: [{
        name: 'Helene Rolles'
      }]
    }],
    beats_list: [{
      title: 'rock ballad',
      description: 'rock ballad'
    }]
  }
}).then(() => console.log('complete'));