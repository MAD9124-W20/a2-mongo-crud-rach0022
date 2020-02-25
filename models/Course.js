const mongoose = require('mongoose');
const student = require('./Student.js');

const schema = new mongoose.schema({
    code: String,
    title: String,
    description: String,
    url: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
});

module.exports = mongoose.model('Course', schema);
