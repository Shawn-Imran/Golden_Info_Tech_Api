// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/comments');


const router = express.Router();

/**
 * http://localhost:7100/api/comments
 */



router.get('/get-all-comments', controller.getAllComments);

module.exports = router;