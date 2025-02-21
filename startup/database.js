const debug = require('debug')('a2:database');
const mongoose = require('mongoose');

module.exports = () =>{
    mongoose
    .connect('mongodb://localhost:27017/mad9124', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> debug('Connected to MongoDB...'))
    .catch(err =>{
        debug('Problem connecting to MongoDB', err);
        process.exit(1);
    });
};
