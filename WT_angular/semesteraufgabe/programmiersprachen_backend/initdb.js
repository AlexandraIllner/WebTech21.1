

const express = require('express');
const router = express.Router();
const {
    Developers,
	Languages,
    Users
} = require('./models/usersM');

// create collection developers
router.post('/members', async(req, res) => {
Developers.insertMany([{"name": "Hopper", 
	"firstname": "Grace", 	
	"gender": "f", 
	"url" : "https//de.wikipedia.org/wiki/Grace_Hopper"
	},



{"name": "Sammet", 
"firstname": "Jean E.", "gender": "f", "url" : "https//de.wikipedia.org/wiki/Jean_E._Sammet"},




{"name": "Tierney", 
"firstname": "Gertrude", "gender": "f", "url" : "https//www.bmc.com/blogs/mainframe-women-innovation-legacy-continues/"},



{"name": "Ramey", 
"firstname": "Chet", "gender": "m"},



{"name": "Wall", 
"firstname": "Larry", "gender": "m"},



{"name": "Eich", 
"firstname": "Brendan", "gender": "m"},



{"name": "Lerdorf", "firstname": "Rasmus", "gender": "m"},


{"name": "Gutmans", 
"firstname": "Andi", "gender": "m"},



{"name": "Suraski", 
"firstname": "Zeev", "gender": "m"},



{"name": "vanRossum", "firstname": "Guido", "gender": "m"},



{"name": "Matsumoto", "firstname": "Yukihiro", "gender": "m"},



{"name": "Hejlsberg", "firstname": "Anders", "gender": "m"},


{"name": "Kemeny", "firstname": "John G.", "gender": "m"},


{"name": "Kurtz", "firstname": "Thomas E.", "gender": "m"},


{"name": "Ritchie", "firstname": "Dennis", "gender": "m"},


{"name": "Selden", "firstname": "William", "gender": "m"},


{"name": "Bromberg", "firstname": "Howard", "gender": "m"},


{"name": "Discount", "firstname": "Howard", "gender": "m"},

{"name": "Reeves", "firstname": "Vernon", "gender": "m"},


{"name": "Sun Microsystems"},


{"name": "Oracle"},


{"name": "PHP Group"},


{"name": "Bell Laboratories"},


{"name": "Zend Technologies"},


{"name": "Python Software Foundation"},


{"name": "Microsoft"},

  {
    name: 'Perlman',
    firstname: 'Radia',
    gender: 'f',
    url: 'https://de.wikipedia.org/wiki/Radia_Perlman'
  },
  {
    
    name: 'Liskov',
    firstname: 'Barbara',
    gender: 'f',
    url: 'https://de.wikipedia.org/wiki/Barbara_Liskov'
    
  },
  {
    
    name: 'Booth',
    firstname: 'Kathleen Hylda Valerie',
    gender: 'f',
    url: 'https://de.wikipedia.org/wiki/Kathleen_Booth'
    
  },
  {

    name: 'Wilson',
    firstname: 'Sophie Mary',
    gender: 'f',
    url: 'https://de.wikipedia.org/wiki/Sophie_Wilson'
    
  }
])
    const allDevelopers = await Developers.find();
    console.log(allDevelopers);
    res.send(allDevelopers);
});

module.exports = router;
