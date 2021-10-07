const express = require('express');
const { logs } = require('../controllers');

const { Router } = express;
const router = Router();

router.get('/:owner', logs.getUserLogs);
router.post('/:owner/:event', logs.createLog);
router.put('/addLog/:log', logs.addDistAndTime);

module.exports = router;