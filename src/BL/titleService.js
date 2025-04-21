const TitleRepository = require('../DAL/titleRepository');
const GenericService = require('./genericService');

class TitleService extends GenericService{
    constructor(){
        super('title');
        this.repository = new TitleRepository();
    }
    
     findFiltered = async(filters) => this.repository.findFiltered(filters);
}

module.exports = TitleService;