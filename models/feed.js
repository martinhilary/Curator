module.exports = function(db){
	let allFeeds = function(callback){
		let queryText = "SELECT url FROM news";
		// const VALUES=[choice of the user]

		db.pool.query(queryText,callback);

	};

	let preferenceFeed = function(callback){
		// Perform the Create function for node
		let queryText="Select url from preferences";
		db.pool.query(queryText,callback);
	}

	let insertPreference = function(callback){
		// The entire dataset that the user chose will be inserted into preferences
		let queryText = "INSERT INTO preferences "
	}
	

	//INSERT INTO news (name,category,url) VALUES($1,$2,$3)




	let newsFeeds=function(callback){
		let queryText="SELECT url from news WHERE category = 'news';";
	}

//INSERT INTO user


	let unicornFeeds=function(callback){
		let queryText="SELECT url from news WHERE category = 'startup';";
	}
	// let createdFeed=function(callback){
	// 	let queryText="INSERT INTO news (name,url) VALUES($1,$2)"
	// 	db.pool.query(queryText,callback)
	// }
	// let feedSelection =function(callback){
	// let queryText= "INSERT INTO selection (name,url) VALUES ($1,$2)"
	// db.pool.query(queryText,callback)
	// }
	return{
		allFeeds,
		preferenceFeed,
		insertPreference
	};

}




