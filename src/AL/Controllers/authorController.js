const service = require('../../BL/authorService');

exports.getAllAuthors = async (request, response) => {
    const authors = await service.getAuthors();
    response.json(authors);
}

exports.getAuthorById = async (request, response) => {
    const { id } = request.params;
    const author = await service.getAuthorById(Number(id));
    response.json(author);
}

exports.createAuthor = async (request, response) => {
    const { name } = request.body;
    const newAuthor = await service.createAuthor({name});
    response.status(201).json(newAuthor)
}

exports.deleteAuthor = async (request, response) => {
    const { id } = request.params;
    
    try {
        await service.deleteAuthor(Number(id));
        response.status(204).send();
    } catch(error){
        if(error.code === 'P2025'){
            return response.status(404).json({ error: 'Author not found'})
        }
        console.error(error);
        response.status(500).json({ error: error.message})
    }
}

exports.updateAuthor = async (request, response) => {
    const {id} = request.params;
    const data = request.body;

    try {
        await service.updateAuthor(Number(id), data);
        response.status(200).send();
    }
    catch (error){
        if(error.code === 'P2025'){
            return response.status(404).json({ error: 'Author not found'});
        }
        console.error(error);
        response.status(500).json({ error: error.message});
    }
}