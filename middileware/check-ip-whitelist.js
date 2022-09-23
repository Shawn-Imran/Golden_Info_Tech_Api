const cors = require('cors');

let whitelist;
if (process.env.PRODUCTION_BUILD === 'true') {
    whitelist = ['http://localhost:4200', 'http://localhost:8100'];
} else {
    whitelist = ['http://localhost:4200', 'http://localhost:8100'];
}

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(
                new Error('Not allowed by CORS')
            )
        }
    }
}

module.exports = cors(corsOptions);
