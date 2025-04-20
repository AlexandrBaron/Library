const GenericRepository = require('../DAL/genericRepository');

class GenericService{
    constructor(modelName){
        this.repository = new GenericRepository(modelName);
    }
    getAll = () => this.repository.getAll();

    getById = (id) => this.repository.getById(id);

    create = (data) => this.repository.create(data);

    delete = (id) => this.repository.delete(id);

    update = (id, data) => this.repository.update(id, data);
}

module.exports = GenericService;