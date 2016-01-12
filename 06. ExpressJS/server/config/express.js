var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './public/app/images/')
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    });

module.exports = function(app, config) {
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/server/views');
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
        uploadDir: '/public/app/images/'
    }));
    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: 'magic unicorns'
    }));
    app.use(stylus.middleware({
        src: config.rootPath + '/public',
        compile: function(str, path) {
            return stylus(str).set('filename', path);
        }
    }));
    app.use(multer({
        storage: storage
    }).single('picture'));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/public'));
}
