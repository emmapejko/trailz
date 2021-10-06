const express = require('express');
const { logs } = require('../controllers');

const { Router } = express;
const router = Router();

router.get('/', );
router.post('/:owner', logs.createLog);
// router.get('/validate/:eventId', );
// router.delete('/removeEvent/:eventId', events.removeEvent);
// router.get('/:userId', events.getUserEvents);
// router.post('/:userId', events.addNewEvent);
// router.post('/:userId/:eventId', events.registerForEvent);
// router.delete('/:userId/:eventId', events.unregisterForEvent);

module.exports = router;