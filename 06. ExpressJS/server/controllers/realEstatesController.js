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
        RealEstate.create({
            title: req.body.title,
            featured: req.body.featured,
            published: req.body.published,
            town : req.body.town,
            imgName: req.file.filename
        }, function(err, realEstate) {
            if (err) {
                console.log('Failed to create new : ' + err);
                return;
            }
            res.redirect('/realEstates');
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
