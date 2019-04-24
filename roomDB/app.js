require('./config/config');
require('./models/db');
 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rtsIndex = require('./routes/index.router');

var app = express(); // define the app variable
 
// configure the middleware
app.use(bodyParser.json());
app.use(cors()); // different port numbers
app.use('/api', rtsIndex);
 
// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));