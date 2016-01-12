var RealEstate = require('mongoose').model('RealEstate');

module.exports = {
    getAllRealEstates: function(req, res, next) {
        RealEstate.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Courses could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getRealEstateById: function(req, res, next) {
        RealEstate.findOne({
            _id: req.params.id
        }).exec(function(err, realEstate) {
            if (err) {
                console.log('RealEstate could not be loaded: ' + err);
            }

            res.send(realEstate);
        })
    },
    createRealEstate: function(req, res, next) {
        console.log(req.body);
        console.log(req.file);
        var real = new RealEstate();
        real.title = req.body.title;
        real.featured = req.body.featured;
        real.published = req.body.published;
        real.town = req.body.town;
        real.imgName = req.file.filename;
        real.save(function(err, realEstate) {
            if (err) {
                console.log('Failed to create new : ' + err);
                return;
            }
            console.log(realEstate);
            res.redirect('http://localhost:3030/#/realEstates/' + realEstate._id);
        });

    },
    upload: function(req, res, next) {
        console.log(req.file);
        fs.readFile('/etc/passwd', 'utf8', function(err, data) {
            if (err) return;
            fs.writeFile(req.file.path, data, function(err) {
                if (err) return;
            });
        });
    }
};
