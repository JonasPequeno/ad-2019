const mongoose = require('../database/connection');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    secretFriend: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Person', PersonSchema);
