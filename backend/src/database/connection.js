const mongoose = require('mongoose');
const URL_BASE = process.env.MONGO_URL;

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
