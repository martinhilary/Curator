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
var counter= 0;

const curate = (request,response)=>{
	response.render('../views/users/curate')
}


const newsParser = (request, response) => {
	feed.bbcFeed( function(err,result) {
		if(err){
			console.log("query error:",err.stack)
		}else{
			counter = 0;
			// this is where you make the parser request 
			parser.parseURL(result.rows[0].url,function(error,feed){
				// iterate over the parser results
				for (var i=0;i< feed.items.length;i++){
					let feedItem =feed.items[i]
					bbc.push({
						 	title:feedItem.title,
							contentSnippet:feedItem.contentSnippet,
							content:feedItem.content,
							link:feedItem.link
					})
				}
				 counter+=1;
				 console.log("Counter check(1):"+counter)
				if(counter == 6){
					let context={bbc,cnn,cbn,nyt,wired,verge};
					console.log("BBC context")
				 	response.render('../views/users/feed',context);
				}
			})

			counter = 0;
			parser.parseURL(result.rows[1].url,function(error,feed){
				for (var i=0;i<feed.items.length;i++){
					let feedItem = feed.items[i]
					cnn.push({
							 title:feedItem.title,
							 content: feedItem.content,
							 link: feedItem.link

					})
				}
				  
				counter+=1;
				console.log("Counter check(2):"+counter)
				if(counter == 6){
					let context={bbc,cnn,cbn,nyt,wired,verge};
					// console.log(context)
				 	response.render('../views/users/feed',context);
				}
				
			})
				// console.log(bbcObj)
				console.log("3: After callbacks")
				console.log(result.rows)
				counter = 0;
			parser.parseURL(result.rows[2].url,function(error,feed){
				for (var i=0;i<feed.items.length;i++){
					let feedItem = feed.items[i]
					cbn.push({
							 title:feedItem.title,
							 content: feedItem.content,
							 link: feedItem.link

					})
				}	

				counter+=1;
				console.log("Counter Check(3):"+counter)
				if(counter == 6){
					let context={bbc,cnn,cbn,nyt,wired,verge}
					response.render("../views/users/feed",context)
				}
			})


			counter = 0;
			parser.parseURL(result.rows[3].url,function(error,feed){
				for (var i=0;i<feed.items.length;i++){
					let feedItem = feed.items[i]
					nyt.push({
							 title:feedItem.title,
							 content: feedItem.content,
							 link: feedItem.link

					})
				}	

				counter+=1;
				console.log("Counter check(4):"+counter)
				if(counter == 6){
					let context={bbc,cnn,cbn,nyt,wired,verge}
					response.render("../views/users/feed",context)
				}
			})

			console.log(result.rows[4])
			//Block Repeat for Wired tech site
			counter = 0;
			parser.parseURL(result.rows[4].url,function(error,feed){
				console.log(feed)
				for (var i=0;i<feed.items.length;i++){
					let feedItem = feed.items[i]
					wired.push({
							 title:feedItem.title,
							 content: feedItem.content,
							 link: feedItem.link

					})
				}	

				counter+=1;
				console.log("Counter check(5):"+counter)
				if(counter == 6){
					let context={bbc,cnn,cbn,nyt,wired,verge}
					response.render("../views/users/feed",context)
				}
			})


			//Block Repeat for Verge tech site
			counter = 0;
			parser.parseURL(result.rows[5].url,function(error,feed){
				console.log(feed)
				for (var i=0;i<feed.items.length;i++){
					let feedItem = feed.items[i]
					verge.push({
							 title:feedItem.title,
							 content: feedItem.content,
							 link: feedItem.link
					})
				}	

				counter+=1;
				console.log("Counter check(5):"+counter)
				if(counter == 6){
					let context={bbc,cnn,cbn,nyt,wired,verge}
					response.render("../views/users/feed",context)
				}
			})





				
				// console.log("Context content")
				// console.log(context)
				// let context={ bbc,
				// 			reddit}
				// 			console.log(context)
				// 			console.log("Context context context")
				// response.render('../views/users/home',context);
		}
	})
}	




	return{
		curate,
		newsParser
	}
}





