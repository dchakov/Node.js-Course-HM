(function() {
    'use strict';

    var chatDb = require('./chat-db');

    //inserts a new user records into the DB
    chatDb.registerUser({
        user: 'DonchoMinkov1',
        pass: '123456q'
    });
    chatDb.registerUser({
        user: 'NikolayKostov1',
        pass: '123456q'
    });

    chatDb.detAllUsers();

    //inserts a new message record into the DB
    //the message has two references to users (from and to)
    chatDb.sendMessage({
        from: 'DonchoMinkov',
        to: 'NikolayKostov',
        text: 'Hey, Niki!'
    });
    chatDb.sendMessage({
        from: 'NikolayKostov',
        to: 'DonchoMinkov',
        text: 'Hey, Doncho!'
    });
    chatDb.sendMessage({
        from: 'DonchoMinkov',
        to: 'NikolayKostov',
        text: 'How are you?'
    });
    chatDb.sendMessage({
        from: 'NikolayKostov',
        to: 'DonchoMinkov',
        text: 'Fine, thank you.'
    });

    //returns an array with all messages between two users
    chatDb.getMessages({
        with: 'DonchoMinkov',
        and: 'NikolayKostov'
    });
}());
