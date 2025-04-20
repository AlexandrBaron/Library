const express = require('express');
const authorRoutes = require('./src/AL/Routes/authorRoutes');
const bookRoutes = require('./src/AL/Routes/bookRoutes');
const userRoutes = require('./src/AL/Routes/userRoutes');
const loanRoutes = require('./src/AL/Routes/loanRoutes');

const app = express();

app.use(express.json());
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/loans', loanRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});