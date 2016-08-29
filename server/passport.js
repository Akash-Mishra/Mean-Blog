// requires the model with passport-Local Mongoose plugged in

var User = require('./models/user'),
    LocalStrategy = require('passport-Local').Strategy;


module.exports = function(passport){
	// use static authentication method of model in Localstrategy
	passport.use(User.createStrategy());

	// use static serialize and deserialize of model for passport session support
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());
};