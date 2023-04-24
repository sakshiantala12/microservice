const express = require('express');
const router = express.Router();
const commentcontroller = require('../controller/commentcontroller');

router.get('/all',commentcontroller.GetComments);

router.post('/create',commentcontroller.createComments);

module.exports = router;