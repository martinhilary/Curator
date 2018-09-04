/**
 * User controller functions.
 *
 * Each user-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */

/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

module.exports = function(db){
	const Parser= require("rss-parser")
	const parser= new Parser();
	var feed = require('../models/feed.js')(db)
	var bbc=[];
	var cnn=[];
	var cbn=[];
	var nyt=[];
	var wired=[];
	var verge=[];
	var countURLsParsed= 0;

	const curate = (request,response)=>{

		response.render('../views/users/curate')
	}


	const newsParser = (request, response) => {
		var container=[]
		// if true then standard else display preferencefeed
		feed.allFeeds(function(err,result){
			if(err){
				console.log("query error:", err.stack)
			}else{
				console.log("Result Length")
				console.log(result.rows.length);

				//Before parser we should set conditional such that when the result.length is not all then we just carry out 
				//to do the parsing with the result(we need filter for the result)

				//iterate through the different urls
				countURLsParsed=0
				for(let i = 0; i < result.rows.length;i++){
					//need conditional to parse different results
					//try putting this reult.rows[i].url in another array
					parser.parseURL(result.rows[i].url,function(error,feed){
						console.log("Feed item length")

						console.log("Result row length")
						console.log(result.rows[i].url)
						//iterate through the items that the url parser returns
						
						var feedItemObj = {};
						for(var j=0;j<feed.items.length;j++){
							let feedItem=feed.items[j];

							if(container[i] == undefined){
								container[i]=[];
							}

							container[i].push({
								 title:feedItem.title,
								 content: feedItem.content,
								 link: feedItem.link

							})
						}


						countURLsParsed+=1
						if(countURLsParsed == result.rows.length){
							let context ={foo : container}
							//put conditional that if your are a techie then i curate the content and then response render
							response.render("../views/users/feed",context)

						}

					})
				}
			}
		
		})	
	
	}
	const techFeed = (request,response) => {
		feed.preferenceFeed(function(err,result){
			if(err){
				console.log("query error",err.stack)
			}else{
				// response.render("../views/feed/techfeed")
				response.render("../views/feed/techfeed")
			}
		})
	}

	const newsFeed = (request,response) => {
		feed.preferenceFeed(function(err,result){
			if(err){
				console.log("query error",err.stack)
			}else{
				// response.render("../views/feed/techfeed")
				response.render("../views/feed/newsfeed")
			}
		})
	}


	const unicornFeed = (request,response) => {
		feed.preferenceFeed(function(err,result){
			if(err){
				console.log("query error",err.stack)
			}else{
				// response.render("../views/feed/techfeed")
				response.render("../views/feed/unicornfeed")
			}
		})
	}





	return{
		curate,
		newsParser,
		techFeed,
		newsFeed,
		unicornFeed
	};
}





