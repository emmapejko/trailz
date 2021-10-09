const express = require('express');
const axios = require('axios');

const { Router } = express;
const router = Router();

const { NPS_API_KEY } = require('../google-maps/API');

router.get('/:park', (req, res) => {
  const { park } = req.params;
  axios.get(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${park}&api_key=${NPS_API_KEY}`)
    .then(results => {
      res.status(200).send(results.data.data)
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(404);
    });
});


module.exports = router;