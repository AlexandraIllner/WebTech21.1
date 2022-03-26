const express = require('express');
const router = express.Router();
const Developer = require('../models/developersM');

// get all developers
router.get('/', async(req, res) => {
    const allDevelopers = await Developer.find();
    //console.log(allDevelopers);
    res.send(allDevelopers);
});

// read one developer via id
router.get('/:id', async(req, res) => {
    try {
        const developer = await Developer.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(developer);
    } catch {
        res.status(404);
        res.send({
            error: "Developer does not exist!"
        });
    }
})

// post one developer
router.post('/new', async(req, res) => {
    const newDeveloper = new Developer({
        name: req.body.name,
        firstname: req.body.firstname,
        gender: req.body.gender,
        url: req.body.url
    })
    await newDeveloper.save();
    //console.log(newDeveloper);
    res.send(newDeveloper);
});

// update one developer w/patch, by
router.patch('/:id', async(req, res) => {
    try {
        const developer = await Developer.findOne({ _id: req.params.id })

        if (req.body.name) {
            developer.name = req.body.name
        }

        if (req.body.firstname) {
            developer.firstname = req.body.firstname
        }

        if (req.body.gender) {
            developer.gender = req.body.gender
        }
		
		if (req.body.url) {
            developer.url = req.body.url
        }

        await Developer.updateOne({ _id: req.params.id }, developer);
        res.send(developer)
    } catch {
        res.status(404)
        res.send({ error: "Developer does not exist!" })
    }
});



// delete one developer via id
router.delete('/:id', async(req, res) => {
    try {
        await Developer.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Developer does not exist!" })
    }
});

module.exports = router;


