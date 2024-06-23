const express = require('express');

const router = express.Router();

router.use(express.json());

const newsLetterCtrl = require('../controllers/newsletter');


router.post('/newsletter', newsLetterCtrl.newsletter_add_post)


module.exports = router;