//ggf. routes-verzeichnis erstellen, wenn es mehrere routen für mehrere items geben soll
//das hier ist bislang spr(ache)-route

//(0) express einbinden
const express = require('express');
//(0) router-paket des express-moduls einbinden, um routen/http-anfragen zu verwalten
const router = express.Router();
//(2) model einbinden
const Language = require('./models/language');

// eine GET-Anfrage unter 3000/message
router.get('/message', async(request, response) => {

    //(0) js-objekt als response -> in server.js ist definiert, dass in json gewandelt wird
    response.send({ message: "Hello FIW!" });
});

//(2) get all languages mit http-get-fkt von router gemappt auf find()-fkt von mongoose-model Spr
router.get('/languages', async(req, res) => {
    const allLanguages = await Language.find();
    console.log(allLanguages);
    res.send(allLanguages);
});

/* router.get('/languages/:id', async(req, res) => {
        try {
            const oneLanguage = await Language.findOne({ _id: req.params.id });
            console.log(req.params);
            res.send(oneLanguage);
        } catch {
            res.status(404);
            res.send({
                error: "Language does not exist!"
            });
        }
}); */

router.get('/languages/:name', async(req, res) => {
    try {
        const oneLanguage = await Language.findOne({ name: req.params.name });
        console.log(req.params);
        res.send(oneLanguage);
    } catch {
        res.status(404);
        res.send({
            error: "Language does not exist!"
        });
    }
});


//(2) post one language: die angaben müssen im json-format {"xy": "az"} im body eingegeben werden
//(2) TODO: default-wert übergeben, wenn ein feld nicht ausgefüllt (?) --> im frontend?
router.post('/languages', async(req, res) => {
    const newLanguage = new Language({
        name: req.body.name,
        jahr: req.body.jahr,
        lizenz: req.body.lizenz
    })
    await newLanguage.save();
    res.send(newLanguage);
});

// update one language mit patch
router.patch('/languages/:id', async(req, res) => {
    try {
        const language = await Language.findOne({ _id: req.params.id })

        //wenn das angefragte objekt einen namen hat, ist das (erstmal) auch der name von 
        if (req.body.name) {
            language.name = req.body.name
        }

        if (req.body.jahr) {
            language.jahr = req.body.jahr
        }

        if (req.body.lizenz) {
            language.lizenz = req.body.lizenz
        }

        await Language.updateOne({ _id: req.params.id }, language);
        res.send(language)
    } catch {
        res.status(404)
        res.send({ error: "Language does not exist!" })
    }
});

// delete one language via id
router.delete('/languages/:id', async(req, res) => {
    try {
        await Language.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Language does not exist!" })
    }
});


//(0) exportieren, damit es in anderen modulen verwendet werden kann
module.exports = router;
