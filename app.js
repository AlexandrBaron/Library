const express = require('express');
const titleRoutes = require('./src/AL/Routes/titleRoutes');
const bookRoutes = require('./src/AL/Routes/bookRoutes');
const authorRoutes = require('./src/AL/Routes/authorRoutes');
const userRoutes = require('./src/AL/Routes/userRoutes');
const loanRoutes = require('./src/AL/Routes/loanRoutes');
const genreRoutes = require('./src/AL/Routes/genreRoute');

const app = express();

app.use(express.json());
app.use('/titles', titleRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes);
app.use('/loans', loanRoutes);
app.use('/genre', genreRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});