const express = require('express');
const router = express.Router();

// eine GET-Anfrage
router.get('/', async(req, res) => {

    res.send({ message: "Hier USERS" });
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../models/usersM');

// // get all users
// router.get('/users', async(req, res) => {
//     const allUsers = await User.find();
//     //console.log(allUsers);
//     res.send(allUsers);
// });

// // read one user via id
// router.get('/users/:id', async(req, res) => {
//     try {
//         const user = await User.findOne({ _id: req.params.id });
//         console.log(req.params);
//         res.send(user);
//     } catch {
//         res.status(404);
//         res.send({
//             error: "User does not exist!"
//         });
//     }
// })

// // post one user
// router.post('/users', async(req, res) => {
//     const newUser = new User({
//         name: req.body.name,
//         firstname: req.body.firstname,
//         gender: req.body.gender,
//         url: req.body.url
//     })
//     await newUser.save();
//     //console.log(newUser);
//     res.send(newUser);
// });

// // update one user w/patch, by id
// router.patch('/users/:id', async(req, res) => {
//     try {
//         const user = await User.findOne({ _id: req.params.id })

//         if (req.body.name) {
//             user.name = req.body.name
//         }

//         if (req.body.firstname) {
//             user.firstname = req.body.firstname
//         }

//         if (req.body.gender) {
//             user.gender = req.body.gender
//         }
		
// 		if (req.body.url) {
//             user.url = req.body.url
//         }



//         await User.updateOne({ _id: req.params.id }, user);
//         res.send(user)
//     } catch {
//         res.status(404)
//         res.send({ error: "User does not exist!" })
//     }
// });



// // delete one user via id
// router.delete('/users/:id', async(req, res) => {
//     try {
//         await User.deleteOne({ _id: req.params.id })
//         res.status(204).send()
//     } catch {
//         res.status(404)
//         res.send({ error: "User does not exist!" })
//     }
// });

// module.exports = router;


