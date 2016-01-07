(function() {
    'use strict';

    var mongoose = require('mongoose'),
        fs = require('fs');
    mongoose.connect('mongodb://localhost/chat-db');

    var modelsPath = __dirname + '/models';
    fs.readdirSync(modelsPath).forEach(function(file) {
        if (file.indexOf('.js') >= 0) {
            require(modelsPath + '/' + file);
        }
    });

    var User = mongoose.model('User');
    var Message = mongoose.model('Message');

    function registerUser(object) {
        var user = new User({
            user: object.user,
            pass: object.pass
        });

        User.find()
            .where('user').equals(object.user)
            .exec(function(err, users) {
                if (err) throw err;
                if (users.length !== 0) {
                    throw {
                        message: 'Username already exists'
                    };
                }
            });
        user.save(function(err) {
            if (err) throw err;
            console.log('User added');
        });
    }

    function sendMessage(object) {
        var message = new Message({
            from: object.from,
            to: object.to,
            text: object.text
        });

        message.save(function(err) {
            if (err) throw err;
            console.log('Message added');
        })
    }

    function getMessages(object) {
        Message.find(
                [{
                    from: object.with,
                    to: object.and
                },{
                    from: object.and,
                    to: object.with
                }])
            .exec(function(err, messages) {
                if (err) throw err;
                console.log(messages);
            })
    }

    function detAllUsers() {
        User.find()
            .exec(function(err, users) {
                if (err) throw err;
                console.log(users);
            });
    }

    module.exports = {
        registerUser,
        sendMessage,
        getMessages,
        detAllUsers
    }
}());
