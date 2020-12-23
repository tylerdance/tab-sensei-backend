
const models = require('./models/');

models.User.create({
  name : "Jimmy Page",
	email : "jimmy@ledzeppelin.com",
	password : "$2a$10$EBVxG0QcsCFgAf/nj4GmyO/NyyB1zz2DKbRw94mw3ferpgrO04ixW",
	userProfile : {
    username: "jimmypage",
    primary_inst: "guitar",
    comments: [{
                songsterr_id: "66015",
                content: "this is a great tab"
              },
              {
                songsterr_id: "136",
                content: "this is a great tab"
              },
              {
                songsterr_id: "845",
                content: "this is a great tab"
              },
              {
                songsterr_id: "25286",
                content: "this is a great tab"
              }
              ],
    songList: [{
                songsterr_id: "27213",
                title: "Buffalo Soldier",
                artist: [{
                  name: "Bob Marley"
                }]
              },
              {
                songsterr_id: "65136",
                title: "Heaven's Calling",
                artist: [{
                  name: "Black Veil Brides"
                }]
              },
              {
                songsterr_id: "25286",
                title: "Shroud Of False",
                artist: [{
                  name: "Anathema"
                }]
              }
          ]
        }
}).then(() => console.log('complete 1'));

models.User.create({
	name : "Andres Segovia",
	email : "andres@andressegovia.com",
	password : "$2a$10$JOeheM/8rnz1W4l.jlDCse3F/oaN1fODoJec6xsXlbOY7FxOemCle",
	userProfile : {
    username: "andres-segovia",
    primary_inst: "guitar",
    comments: [{
                songsterr_id: 972,
                content: "this is a great tab"
              },
              {
                songsterr_id: 845,
                content: "this is a great tab"
              },
              {
                songsterr_id: 271,
                content: "this is a great tab"
              },
              {
                songsterr_id: 66015,
                content: "this is a great tab"
              }
              ],
    songList: [{
                songsterr_id: 25037,
                title: "andbfds",
                artist: [{
                  name: "Alice in Chains"
                }]
              },
              {
                songsterr_id: 1143,
                title: "Moody Blue",
                artist: [{
                  name: "Ale & Gabbo"
                }]
              },
              {
                songsterr_id: 406278,
                title: "False Flags",
                artist: [{
                  name: "Aggression"
                }]
              },
              {
                songsterr_id: 35289,
                title: "The 15th",
                artist: [{
                  name: "Fischerspooner"
                }]
              }
          ]
        }
}).then(() => console.log('complete 2'));
