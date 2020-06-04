const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const Validation = require('../validations/validation');

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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    }
});

module.exports = mongoose.model('Person', PersonSchema);
