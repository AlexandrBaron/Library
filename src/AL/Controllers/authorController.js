const service = require('../../BL/authorService');

exports.getAllAuthors = async (request, response) => {
    const authors = await service.getAllAuthors();
    response.json(authors);
}