const express = require('express');
const router = express.Router();

const Language = require('../models/languagesM');
const Developer = require('../models/developersM');

/* //languages-HTTP-Funktionen (/xyz wird an in server.js definierte route gehängt):
router.get('/languages/all', async(req, res) => {
    const allLanguages = await Language.find();
    console.log(allLanguages);
    res.send(allLanguages);
});

// read one language via id
router.get('/languages/:id', async(req, res) => {
    try {
        const language = await Language.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(language);
    } catch {
        res.status(404);
        res.send({
            error: "Language does not exist!"
        });
    }
})

// post one language
router.post('/languages/post', async(req, res) => {
    const newLanguage = new Language({
        name: req.body.name,
        token: req.body.token,
        year: req.body.year,
		paradigm: req.body.paradigm,
		helloworld: req.body.helloworld,
        info: req.body.info

    })
    await newLanguage.save();
    console.log(newLanguage);
    res.send(newLanguage);
});

// update one language w/patch, by
router.patch('/languages/patch/:id', async(req, res) => {
    try {
        const language = await Language.findOne({ _id: req.params.id })

        if (req.body.name) {
            language.name = req.body.name
        }

        if (req.body.token) {
            language.token = req.body.token
        }

        if (req.body.year) {
            language.year = req.body.year
        }
		
		if (req.body.paradigm) {
            language.paradigm = req.body.paradigm
        }
		
		if (req.body.helloworld) {
            language.helloworld = req.body.helloworld
        }
		
		if (req.body.info) {
            language.info = req.body.info
        }

        await Language.updateOne({ _id: req.params.id }, language);
        res.send(language)
    } catch {
        res.status(404)
        res.send({ error: "Language does not exist!" })
    }
});

// delete one language via id
router.delete('/languages/delete/:id', async(req, res) => {
    try {
        await Language.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Language does not exist!" })
    }
}); */



module.exports = router; 