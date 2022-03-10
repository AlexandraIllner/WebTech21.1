const express = require('express'); //(2) express importieren
const router = express.Router(); //(2) express.Router als middleware importieren
const Dev = require('./models/devs'); //(7)Dev-Model einbinden

//(7) READ --> GET all dev mittels find(), '/devs' definiert Route
router.get('/devs', async(req, res) => {    //anonyme Fkt mit async, damit unten await möglich
    const allDevs = await Dev.find();       //await: darauf warten, dass find() Ergebnis oder Fehler liefert   
    // console.log("get aufgerufen");
    // console.log(allDevs); 
    res.send(allDevs);                      //res(ponse).send(et) Ergebnis von Dev.find()
});

//(7) READ/GET one by id oder name
router.get('/devs/:name', async(req, res) => {
    try {
        const dev = await Dev.findOne({ name: req.params.name });
        console.log(req.params);
        res.send(dev);
    } catch {
        res.status(404);
        res.send({
            error: "Name does not exist!"
        });
    }
})

//(7) CREATE --> POST: post ein Dev-Objekt
router.post('/devs', async(req, res) => {
    const newDev = new Dev({
        name: req.body.name,
        vorname: req.body.vorname,
        gender: req.body.gender,
        url: req.body.url
    })
    await newDev.save(); // Dev-Objekt speichern
    res.send(newDev); // und zurückgeben
});

//(7) UPDATE --> PATCH: ergänzen/ändern (PUT erzeugt komplett neuen Datensatz -> nachgucken)
// update one dev by _id
router.patch('/devs/:id', async(req, res) => { //URL um Parameter :id erweitern, Fkt.body in try-Block einbetten
    try {
        const dev = await Dev.findOne({ _id: req.params.id }) //1. Parameter für die findOne-Fkt: Filter _id
        //weitere Parameter als JSON im body d.request-Objekts; ergeben zusammen ein neues dev-Objekt (falls eins mit id existiert, sonst catchFkt)
        if (req.body.vorname) {
            dev.vorname = req.body.vorname
        }

        if (req.body.name) {
            dev.name = req.body.name
        }

        if (req.body.gender) {
            dev.gender = req.body.gender
        }
		
		if (req.body.url) {
            dev.gender = req.body.url
        }

        await Dev.updateOne({ _id: req.params.id }, dev);
        res.send(dev)
    } catch {
        res.status(404)
        res.send({ error: "Dev does not exist or is misspelled" })
    }
});

//(7)DELETE
// deleteOne dev via name
router.delete('/devs/:name', async(req, res) => {
    try {
        await Dev.deleteOne({ name: req.params.name })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Dev does not exist!" })
    }
});




module.exports = router; //(2) wichtig, sonst kann router nicht von anderen Modulen importiert&genutzt werden
