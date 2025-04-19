const express = require('express');
const authorRoutes = require('./src/AL/Routes/authorRoutes');

const app = express();

app.use(express.json());
app.use('/authors', authorRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});