const express = require('express');
const { running } = require('../controllers/runningController');

const router = express.Router();

router.get('/', running);

module.exports = router;