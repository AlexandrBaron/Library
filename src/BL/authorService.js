const repository = require('../DAL/authorRepository');

exports.getAuthors = () => {
    return repository.getAll();
} 