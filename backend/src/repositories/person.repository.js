const PersonModel = require('../models/person.model');

class PersonRepository {

    constructor(model) {
    };

    async create(data) {
        let model = new PersonModel(data);
        return model.save();
    };

    async getAll() {
        return PersonModel.find().lean();
    }

    async getById(id) {
        return PersonModel.findById(id);
    };

    async update(id, data) {
        return PersonModel.findByIdAndUpdate(id, { $set: { ...data } });
    };


    async delete(id) {
        return PersonModel.findByIdAndRemove(id);
    };
};

module.exports = PersonRepository;