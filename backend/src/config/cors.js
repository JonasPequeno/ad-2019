const cors = require('cors');

module.exports = cors({
    methods: ['GET', 'PUT', 'POST', 'DELETE']
});