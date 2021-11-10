const express = require('express');
const routerApi = require('./routes');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./db/database');
require('dotenv').config()

const app = express();

// Settings
const port = process.env.PORT || 3000;

// Cors
const whitelist = ['http://localhost:3000']
const options = {
    origin: (origin, callback) => {
        if ( whitelist.includes(origin) || !origin ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido'))
        }
    }
}

// Database
const url = process.env.DB_STRING;
connectDB(url)

// Middlewares
app.use(cors(options));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
routerApi(app);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})