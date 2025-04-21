const GenericRepository = require('./genericRepository');

class TitleRepository extends GenericRepository{
    constructor(){
        super('title', ['author', 'genre']);
    }

    async findFiltered(filters){
        const where = {};
        
        if(filters.title){
            where.title = {
                contains: filters.title,
                mode: 'insensitive'
            }
        }

        if(filters.author){
            where.author = {
                name: {
                    contains: filters.author,
                    mode: 'insensitive'
                }
            };
        }
        
        if(filters.rating){
            where.rating = {
                gt: parseFloat(filters.rating)
            };
        }

        if(filters.freeToLoans){
            where.freeToLoans = {
                gt: 0
            };
        }
        
        if(filters.publishedAt){
            where.publishedAt = parseInt(filters.publishedAt);
        }

        if(filters.genre){
            where.genre = {
                name: {
                    contains: filters.genre,
                    mode: 'insensitive'
                }
            }
        }

        if(filters.isbn){
            where.isbn = {
                contains: filters.isbn,
                mode: 'insensitive'
            }
        }

        if(filters.language){
            where.language = {
                contains: filters.language,
                mode: 'insensitive'
            }
        }

        return this.model.findMany({
            where,
            include: {
              author: true,
              genre: true
            }
        });
    }
}
module.exports = TitleRepository;