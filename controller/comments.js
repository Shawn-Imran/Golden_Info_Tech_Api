// Require Post Schema from Model
const News = require('../models/comments');


exports.getAllComments= async (req, res, next) => {
    try {

        const comments = require('./../comments.json');
        let docCount =comments.length;
       
        console.log(comments);

        res.status(200).json({
            success: true,
            data: comments,
            count: docCount
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}

