const { Event, User, Log } = require('../database');

/**
 * create log in db with owner and default values
 */
const createLog = (req, res) => {
  const { owner } = req.params;
  Log.create({ owner })
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.error(err);
      res.sendStatus(404);
    })
}

module.exports = {
  createLog,
}