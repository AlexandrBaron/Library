const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

exports.getAll = () => client.books.findMany();