const express = require('express');
const titleRoutes = require('./src/AL/Routes/titleRoutes');
const bookRoutes = require('./src/AL/Routes/bookRoutes');
const authorRoutes = require('./src/AL/Routes/authorRoutes');
const userRoutes = require('./src/AL/Routes/userRoutes');
const loanRoutes = require('./src/AL/Routes/loanRoutes');
const genreRoutes = require('./src/AL/Routes/genreRoutes');
const reservationRoutes = require('./src/AL/Routes/reservationRoutes');
const fineRoutes = require('./src/AL/Routes/fineRoutes');
const actionlogRoutes = require('./src/AL/Routes/actionlogRoutes');

const app = express();

app.use(express.json());
app.use('/titles', titleRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes);
app.use('/loans', loanRoutes);
app.use('/genre', genreRoutes);
app.use('/reservation', reservationRoutes);
app.use('/fines', fineRoutes);
app.use('/actionlog', actionlogRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});