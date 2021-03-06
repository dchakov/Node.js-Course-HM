var auth = require('./auth'),
    controllers = require('../controllers');
    
module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/realEstates', controllers.realEstates.getAllRealEstates);
    app.post('/api/realEstates', controllers.realEstates.createRealEstate);
    app.get('/api/realEstates/:id', controllers.realEstates.getRealEstateById);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);    

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    })

    app.get('*', function(req, res) {
        res.render('index', {
            currentUser: req.user
        });
    });
}
