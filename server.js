var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    app = express();

    // Environment Configuration
    var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        envConfig = require('./server/env')[env];


    mongoose.connect(envConfig.db);

    // EXPRESS CONFIG
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(express.static(__dirname + '/public' ));
    app.set('view engine', 'ejs');

    // ROUTES
    require('./server/routes')(app);

    // Start Server 
    app.listen(envConfig.port, function() {
    	console.log('Magic Mike listening to ' + envConfig.port);
    });