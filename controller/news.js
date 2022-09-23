// Require Post Schema from Model
const News = require('../models/news');



exports.getAllNews= async (req, res, next) => {
    try {
        const news = require('./../news.json');
        let docCount =news.length;

        res.status(200).json({
            success: true,
            data: news,
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

