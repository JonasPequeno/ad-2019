const PersonRepository = require('../repositories/person.repository');
const repository = new PersonRepository();

class PersonController {

    constructor() {
    };

    async post(req, res) {
        try {
            const data = req.body;
            const person = await repository.create(data);
            return res.status(201).json(person);
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async put(req, res) {
        try {
            const data = req.body;
            const id = req.params.id;

            const person = await repository.update(id, data);
            if (!person) {
                return res.status(404).json({ message: 'person not found!' })
            }
            return res.status(201).json(person);

        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async getById(req, res) {
        try {
            const id = req.params.id;
            repository.getById(id).then(person => {
                if (!person) {
                    return res.status(404).json({ message: 'person not found!' })
                }
                return res.status(200).json({ person });
            })
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async get(req, res) {
        try {
            const persons = await repository.getAll();
            if (!persons) {
                return res.status(404).json({ message: 'person not found!' })
            }
            return res.status(200).json(persons)
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };

    async delete(req, res) {
        try {
            const id = req.params.id;
            const person = repository.delete(id)
            if (!person) {
                return res.status(404).json({ message: 'person not found!' })
            }
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message: `error: ${error}` });
        };
    };
};

module.exports = PersonController;
