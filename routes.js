module.exports=(app,db)=>{
	const users=require('./controllers/user.js')(db);
	const feed=require('./controllers/feed.js')(db)
	app.get('/', users.home)
	app.get("/users/login", users.login)
	app.get("/feed",feed.newsParser)
	app.get('/feed/curate',feed.curate)
	app.get("/users/register", users.register)
	app.post("/users/login",users.Authentications)
	app.post("/users/register",users.createNew)
}