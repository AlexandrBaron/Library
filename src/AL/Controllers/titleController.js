const TitleService = require('../../BL/titleService');
const GenericController = require('./genericController');

class TitleController extends GenericController {
    constructor(modelName){
        super('title');
        this.service = new TitleService();
    }
    
    findFiltered = async (request, response) => {
        try {
            const result = await this.service.findFiltered(request.query);
            response.json(result);
        } catch(error){
            console.error('TitleController.findFiltered error:', error);
            response.status(500).json({ error: 'Chyba při filtrování titulů.' });
        }
    }

}

module.exports = TitleController;