require('../models/person.model');
const _model = 'Person';
const GenericRepository = require('./generic/generic.repository');
_generic = new GenericRepository(_model);

class PersonRepository {
    constructor() {
    };

    async create(data) {
        return await _generic.create(data);
    };
    async getById(id) {
        return await _generic.getById(id);
    };
    async update(id, data) {
        return await _generic.update(id, data);
    };
    async getAll() {
        return await _generic.getAll();
    };
    async delete(id) {
        return await _generic.delete(id);
    };
    async getFriends() {
        _generic._model.find({}, 'name email');
    };
    async getFriendsByName(name) {
        _generic._model.find({})
            .populate('secretFriend', 'name');
    };
};

module.exports = PersonRepository;