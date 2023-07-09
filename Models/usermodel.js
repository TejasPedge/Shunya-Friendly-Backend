const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true
    }
});

const USER_MODEL = mongoose.model('User', usersSchema);

module.exports = {USER_MODEL};