const GenericService = require('../../BL/genericService');

class GenericController {
    constructor(modelName){
        this.service = new GenericService(modelName);
    }
    
    getAll = async (request, response) => {
        const result = await this.service.getAll();
        response.json(result);
    }
    
    getById = async (request, response) => {
        const { id } = request.params;
        const result = await this.service.getById(Number(id));
        response.json(result);
    }
    
    create = async (request, response) => {
        const  data  = request.body;
        const result = await this.service.create(data);
        response.status(201).json(result)
    }
    
    delete = async (request, response) => {
        const { id } = request.params;
        
        try {
            await this.service.delete(Number(id));
            response.status(204).send();
        } catch(error){
            if(error.code === 'P2025'){
                return response.status(404).json({ error: 'Item not found'})
            }
            console.error(error);
            response.status(500).json({ error: error.message})
        }
    }
    
    update = async (request, response) => {
        const {id} = request.params;
        const data = request.body;
    
        try {
            await this.service.update(Number(id), data);
            response.status(200).send();
        }
        catch (error){
            if(error.code === 'P2025'){
                return response.status(404).json({ error: 'Item not found'});
            }
            console.error(error);
            response.status(500).json({ error: error.message});
        }
    }
}

module.exports = GenericController;