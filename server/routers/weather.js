const express = require('express');
const { events } = require('../controllers');

const { Router } = express;
const router = Router();


router.get("/", async (req, res, next) => {
  const locKey = process.env.LOCATION_KEY;
  const locResponse = await fetch(
    `http://api.ipstack.com/${req.ip}?access_key=${locKey}`
  );
  const location = await locResponse.json();
});

router.get("/", async (req, res, next) => {
  // ...

  // weather request
  const weatherKey = process.env.WEATHER_KEY;
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${location.city}`
  );
  const weather = await response.json();
});