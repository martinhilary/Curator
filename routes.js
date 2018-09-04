module.exports=(app,db)=>{
	const users=require('./controllers/user.js')(db);
	const feed=require('./controllers/feed.js')(db)
	app.get('/', users.home)
	app.get("/users/login", users.login)
	app.get("/feed",feed.newsParser)
	app.get('/feed/curate',feed.curate)
	app.get("/users/register", users.register)
	app.get("/users/about",users.about)
	app.post("/feed/tech",feed.techFeed)
	app.post("/feed/news", feed.newsFeed)
	app.post("/feed/startups",feed.unicornFeed )


	// app.post("/feed/searchResults", feed.searchResults)
	app.post("/users/login",users.Authentications)
	app.post("/users/register",users.createNew)
}

// <form className="createuser" method="GET" action='/users/new'>
//                     <input type="hidden" name="createuser" />
//                     <div className="buttonDiv">
//                         <input className="createuser" type="submit" value="Create User" />
//                     </div>
//                     </form>