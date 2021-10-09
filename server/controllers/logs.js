const { Event, User, Log } = require('../database');

/**
 * create log in db with owner and default values
 */
const createLog = (req, res) => {
  const { owner, event } = req.params;
  Log.findOne({ owner, event })
    .then(found => {
      if (!found) {
        Log.create({owner, event })
          .then((created) => {
            //console.log('created log sending it back');
            res.send(created)
          })
          .catch(err => {
            console.error(err);
            res.sendStatus(404);
          });
      } else {
        //console.log('found log sending it back');
        res.send(found);
      }
    })
};

/**
 * get all logs assoc w user
 */
const getUserLogs = (req, res) => {
  const { owner } = req.params;
  const logs = [];
  Log.find()
    .then(logRes => {
      logRes.forEach(log => {
        if (log.owner.toString() === owner) {
          logs.push(log);
        }
      })
    })
    .then(() => res.send(logs))
    .catch(err => {
      console.error(err);
      res.sendStatus(404);
    })

};

const addDistAndTime = (req, res) => {
  const { log } = req.params;
  const { distance, hours, minutes, seconds } = req.body.data;
  Log.updateOne({ _id: log }, {
    distance,
    hours,
    minutes,
    seconds
  })
  .then(response => {
    //console.log(response);
    res.sendStatus(201);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(404);
  })
}

module.exports = {
  createLog,
  getUserLogs,
  addDistAndTime,
}