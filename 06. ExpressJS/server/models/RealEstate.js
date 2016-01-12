var mongoose = require('mongoose');

var realEstatesSchema = mongoose.Schema({
    title: String,
    featured: Boolean,
    published: Date,
    town: String,
    imgName:String
});

var RealEstate = mongoose.model('RealEstate', realEstatesSchema);

module.exports.seedInitialRealEstates = function() {
    //RealEstate.find({}).remove(function() { console.log('purge callback') });
    RealEstate.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find RealEstates: ' + err);
            return;
        }

        if (collection.length === 0) {
            RealEstate.create({title: '3229 Hill Valley St, Las Vegas NV, 89129', featured: true, published: new Date('10/5/2013'), town: 'Las Vegas NV',imgName:'3229HillValley.jpg'});
            RealEstate.create({title: 'Alpine Crossings 3528 at Alpine Crossings At Skye Canyon, Las Vegas, NV, 89166', featured: true, published: new Date('10/12/2013'), town: 'Las Vegas NV',imgName:'3528AlpineCrossings.jpg'});
            RealEstate.create({title: 'Alpine Crossings 3231 at Alpine Crossings At Skye Canyon, Las Vegas, NV, 89166', featured: false, published: new Date('10/1/2013'), town: 'Las Vegas NV',imgName:'3231AlpineCrossings.jpg'});
            RealEstate.create({title: '4885 Denaro Dr, Las Vegas NV, 89135', featured: false, published: new Date('7/12/2013'), town: 'Las Vegas NV',imgName:'4885Denaro.jpg'});
            RealEstate.create({title: '1861 Nw South River Dr # 2506, Miami FL, 33125', featured: true, published: new Date('1/1/2013'), town: 'Miami',imgName:'1861NwSouthRiver.jpg'});
            RealEstate.create({title: '6200 Rolling Road Dr, Pinecrest FL, 33156', featured: true, published: new Date('10/13/2013'), town: 'Miami',imgName:'6200RollingRoad.jpg'});
            RealEstate.create({title: '14200 Sw 151st Ave, Miami FL, 33196', featured: true, published: new Date('3/1/2013'), town: 'Miami',imgName:'14200Sw151stAve.jpg'});
            RealEstate.create({title: '15441 Sw 112th Ter, Miami FL, 33196', featured: true, published: new Date('2/1/2013'), town: 'Miami',imgName:'15441Sw112thTer.jpg'});
            RealEstate.create({title: '4225 5th Avenue, San Diego CA, 92103', featured: true, published: new Date('10/7/2013'), town: 'San Diego',imgName:'42255thAvenue.jpg'});
            RealEstate.create({title: '325 7th Ave 611, San Diego CA, 92101', featured: false, published: new Date('8/1/2013'), town: 'San Diego',imgName:'3257thAve611.jpg'});
            RealEstate.create({title: '10511 Greenford Drive, San Diego CA, 92126', featured: false, published: new Date('11/1/2013'), town: 'San Diego',imgName:'10511GreenfordDrive.jpg'});
            RealEstate.create({title: "3781 La Cresta Dr., San Diego CA, 92107", featured: true, published: new Date('10/13/2013'), town: 'San Diego',imgName:'3781LaCrestaDr.jpg'});
            RealEstate.create({title: '285 Centennial Olympic Park Dr., Atlanta GA, 30313', featured: false, published: new Date('10/1/2013'), town: 'Atlanta',imgName:'285CentennialOlympicPark.jpg'});
            RealEstate.create({title: '2255 Rugby Terrace, College Park GA, 30337', featured: true, published: new Date('2/15/2013'), town: 'Atlanta',imgName:'2255RugbyTerrace.jpg'});
            RealEstate.create({title: '345-12 Glen Iris Drive, Atlanta, GA, 30312', featured: true, published: new Date('7/1/2013'), town: 'Atlanta',imgName:'12GlenIrisDrive.jpg'});
        }
    });
};
