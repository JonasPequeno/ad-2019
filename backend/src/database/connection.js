const mongoose = require('mongoose');
const URL_BASE = 'mongodb://admin:admin1230@ds341825.mlab.com:41825/ad-2019';

mongoose.connect(
    URL_BASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection.on('connected', () => {
    console.log(`connected on => ${URL_BASE}`);
});

module.exports = mongoose;
