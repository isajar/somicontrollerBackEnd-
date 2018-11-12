const mongoose = require('mongoose');
const employeeRouter = require('./routes/employees');
const express = require('express');
const app = express();

// CONECTION TO MONGODB
mongoose.connect('mongodb://localhost/somicontroller')
    .then(() => console.log('DB...OK: Conected to Mongo DB'))
    .catch(error => console.error('Could not conect to MongoDb', error));

// MIDDLEWARE 
app.use(express.json());

// ROUTE HANDLING 
app.use('/api/employees', employeeRouter);

// SERVER INITIALIZATION
// global definiton of port to listen, default 3000
const port = process.env.port || 3000;
// start listening 
app.listen(port, () => console.log(`SERVER...OK: Listening on port ${port}`));