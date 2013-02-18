var port = process.env.PORT || 4000,
    app = require('./app').init(port),
    utils = require('./utils'),
    request = require('request');
    // include other require modules here..
    
var locals = {
	author:'Jane Doe'
	// add other local vars here
};

/* every request route */
app.get('*', function(req,res,next){
	if (req.session) {
		locals.session=req.session;
		locals.once="";
	}
	
	next();
});

/* default page route */
app.get('/', function(req,res){
	console.log("show home page");
	res.render('index.ejs', locals);
});


/* add other routes.. */
app.get('/about', function(req,res){
    console.log("show about page");
    res.render('about.ejs', locals);
});


/* 404 route (ALWAYS keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});
