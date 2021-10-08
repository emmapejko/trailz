const express = require('express');

const { Router } = express;
const router = Router();

const { NPS_API_KEY } = require('../google-maps/API');

router.get('/:park', (req, res) => {

});


module.exports = router;