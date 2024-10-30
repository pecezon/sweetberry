//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

//app
const app = express();

//db 
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin: true, credentials: true}));

//routes
const testRoutes = require('./routes/test');
const flavorRoutes = require('./routes/flavor');
const reviewRoutes = require('./routes/review');
const defaultRoutes = require('./routes/default');

app.use('/', testRoutes);
app.use('/', flavorRoutes);
app.use('/', reviewRoutes);
app.use('/', defaultRoutes);

//port
const port = process.env.PORT || 8000;

//listen
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});