// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/news');

const router = express.Router();

/**
 * http://localhost:7100/api/news
 */


router.get('/get-all-news', controller.getAllNews);

// Export All router..
module.exports = router;