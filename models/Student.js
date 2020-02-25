const mongoose = require('mongoose');

const schema = new mongoose.schema({
    firstName: String,
    lastName: String,
    nickName: String,
    email: String
});

module.exports = mongoose.model('Student', schema);
