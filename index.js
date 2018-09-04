// **
//  * Entry point to Express web server.
//  *
//  * Import external library modules as needed (eg. body-parser, etc).
//  *
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const db = require('./db.js');
const pg= require('pg');
let Parser=require('rss-parser')
let parser=new Parser()



// **
//  * ===================================
//  * Configurations and set up
//  * ===================================
//  *x
// Init express app1
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));

// Set jsx to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname+ '/views')
app.set('view engine','jsx');
app.engine('jsx',reactEngine);


/**
 * ===================================
 * Routes
 * ===================================
 */

// Import routes to match incoming requests

// Root GET request (it doesn't belong in any controller file)

// Catch all unmatched requests and return 404 not found page
var routesFileContent= require('./routes')
routesFileContent(app,db);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
 //
//save the results in some let someData=null;
// read the rss feed and save it in someData
//my browser will do a get request to /getData to come here and retrieve the data from somedata
//Main issue is that the parser function is not recognised in the browser 
//Solution=> direct to the browser to get the data
// someData=null;
// let parser = new Parser({
//   customFields: {
//     feed: ['otherTitle', 'extendedDescription'],
//     item: ['coAuthor','subtitle'],
//   }
// });
 

const server = app.listen(3001, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

// Run clean up actions when server shuts down
server.on('close', () => {
  console.log('Closed express server');

  // close database connection pool

});