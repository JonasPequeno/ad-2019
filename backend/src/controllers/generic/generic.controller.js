class GenericController {
    constructor() { }

    async post(repository, data) {
        try {
            return await repository.create(data);
        } catch (error) {
            return { message: `Error: ${error}` };
        }
    }

    async put(repository, data, id) {
        try {
            return await repository.update(data, id);
        } catch (error) {
            return { message: `Error: ${error}` };
        }
    }

    async getAll(repository) {
        try {
            return await repository.getAll();
        } catch (error) {
            return { message: `Error: ${error}` };
        }
    }

    async getById(repository, id) {
        try {
            return await repository.getById(id);
        } catch (error) {
            return { message: `Error: ${error}` };
        }
    }

    async delete(repository, id) {
        try {
            return await repository.delete(id);
        } catch (error) {
            return { message: `Error: ${error}` };
        }
    }
};

module.exports = GenericController;