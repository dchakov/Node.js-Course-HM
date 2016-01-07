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

userSchema.path('user').validate(function(user) {
    return user.length >= 2 && user.length < 30;
});
userSchema.path('pass').validate(function(pass) {
    return pass.length >= 6 && pass.length < 30;
});

mongoose.model('User', userSchema);
