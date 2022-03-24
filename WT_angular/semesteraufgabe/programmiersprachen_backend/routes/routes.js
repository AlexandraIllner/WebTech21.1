const express = require('express');
const router = express.Router();

// eine GET-Anfrage
router.get('/', async(req, res) => {

    res.send({ message: "Hier nix zu sehen" });
});

module.exports = router;