const PersonRepository = require('../repositories/person.repository');
const GenericController = require('./generic/generic.controller');

class PersonController {

    constructor() {
        this._repository = new PersonRepository();
        this._generic = new GenericController();
    };

    async post(req, res) {
        try {
            const data = req.body;

            const person = this._generic.post(this._repository, data);
            return res.status(201).json(person);
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async put(req, res) {
        try {
            const data = req.body;

            const person = this._generic(this._repository, data);
            if (!person) {
                return res.status(404).json({ message: 'person not found!' })
            }
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async getById(req, res) {
        try {
            const { id } = req.params.id;
            let person = this._generic.getById(this._repository, id);

            if (!person) {
                return res.status(404).json({ message: 'person not found!' })
            }
            res.status(200).json({ person });
            return

        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async get(req, res) {
        try {
            const people = this._generic.getAll(this._repository);

            return res.status(200).json({ people })
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async delete(req, res) {
        try {
            const { id } = req.params.id;
            const person = this._generic.delete(this._repository, id);

            if (!person) {
                return res.status(404).json({ message: 'person not found!' })
            }
            return res.status(204).json({});
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };
};

module.exports = PersonController;
