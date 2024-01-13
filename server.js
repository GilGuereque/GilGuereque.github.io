// Set up Express app
const express = require('express');
const app = express();
const axios = require('axios'); // Import axios
const PORT = process.env.PORT || 5050;
require('dotenv').config({ path: './config/.env/' }); // Import dotenv and configure it to load values from .env file


// Set up the Routes
const mainRoutes = require('./routes/main');


// Set up middleware for Express
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Use Routes
app.use('/', mainRoutes);




// Set up localhost PORT connection
app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});