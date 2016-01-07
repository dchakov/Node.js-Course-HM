var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);