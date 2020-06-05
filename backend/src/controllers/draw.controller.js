const DrawFriends = require('../services/drawFriends/drawFriends.service')
const _service = new DrawFriends();
class DrawController {

    constructor() {

    };

    async post(req, res) {
        try {
            await _service.drawn();
            res.status(200).json();
        } catch (error) {
            res.json(error);
        };
    };
};

module.exports = DrawController;
