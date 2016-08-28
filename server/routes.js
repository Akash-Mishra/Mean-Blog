var express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/../'),
    apiRouter = express.Router(),
    router = express.Router();

    module.exports = function (app) {

    	// angularjs catch all route
    	router.get('/*', function(req, res) {
    		res.sendFile(rootPath + 'public/index.html', { user: req.user });
    	});

    	app.use('/api', apiRouter);   // haven't built any api
    	app.use('/', router);

    	// home route 
    	router.get('/', function(req, res) {
    		res.render('index');
    	});


    	// admin route
    	router.get('/admin', function(req, res) {
    		res.render('admin/login');
    	});

    	router.get('/admin/register', function(req, res) {
    		res.render('admin/register');
    	});
    };