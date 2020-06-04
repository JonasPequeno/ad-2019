class GenericController {
    constructor() { }

    async post(repository, validation, data) {
        try {
            if (!validation.isValid()) {
                return {
                    message: 'Existem dados inválidos na sua requisição',
                    validation: validation.erros()
                };
            }
            return await repository.create(data);
        } catch (error) {
            return { message: `Erro no processamento: ${error}` };
        }
    }

    async getAll(repository, validation) {
        try {
            if (!validation.isValid()) {
                return {
                    message: 'Existem dados inválidos na sua requisição',
                    validation: validation.erros()
                };
            }
            return await repository.getAll();
        } catch (error) {
            return { message: `Erro no processamento: ${error}` };
        }
    }

    async getById(repository, validation, id) {
        try {
            if (!validation.isValid()) {
                return {
                    message: 'Existem dados inválidos na sua requisição',
                    validation: validation.errors()
                }
            }
            return await repository.getById(id);
        } catch (error) {
            return { message: `Erro no processamento: ${error}` };
        }
    }

    async delete(repository, validation, id) {
        try {
            if (!validation.isValid()) {
                return {
                    message: 'Existem dados inválidos na sua requisição',
                    validation: validation.errors()
                }
            }
            return await repository.delete(id);
        } catch (error) {
            return { message: `Erro no processamento: ${error}` };
        }
    }
};

module.exports = GenericController;