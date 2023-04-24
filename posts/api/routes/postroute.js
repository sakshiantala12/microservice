const express = require('express');
const router = express.Router();
const postcontroller = require('../controller/postcontroller');


router.get('/all',postcontroller.GetPost);

router.post('/create',postcontroller.createPost);

router.get('/:id',postcontroller.GetAllPost);


module.exports = router;