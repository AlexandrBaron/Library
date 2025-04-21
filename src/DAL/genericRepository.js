const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

class GenericRepository {
    constructor(modelName, relations = []){
        this.model = client[modelName];
        this.relations = relations;
    }

    getAll = () => this.model.findMany();
    
    getById = (id) => this.model.findUnique({
        where : {id : Number(id)}
    });
    
    create = (data) => {
        return this.model.create({ data });
      };
    
    update = (id, data) => this.model.update({
        where : {id : Number(id)},
        data : data
    });
    
    delete = (id) => this.model.delete({
        where : {id : Number(id)}
    });
}

module.exports = GenericRepository;