const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

exports.getAll = () => client.authors.findMany();

exports.getById = (id) => client.authors.findUnique({
    where : {id : Number(id)}
});

exports.create = (data) => client.authors.create({data});

exports.delete = (id) => client.authors.delete({
    where : {id : Number(id)}
});

exports.update = (id, data) => client.authors.update({
    where : {id : Number(id)},
    data : data
});