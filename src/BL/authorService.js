const { response, request } = require('express');
const repository = require('../DAL/authorRepository');

exports.getAuthors = () => {
    return repository.getAll();
} 

exports.getAuthorById = (id) => {
    return repository.getById(id);
} 

exports.createAuthor = (data) => {
    return repository.create(data);
}

exports.deleteAuthor = (id) => {
    return repository.delete(id);
}

exports.updateAuthor = (id, data) => {
    return repository.update(id, data);
}