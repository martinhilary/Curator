module.exports = function(db){
	let bbcFeed = function(callback){
		let queryText = "SELECT url FROM news";
		// const VALUES=[choice of the user]

		db.pool.query(queryText,callback);

	};

	return{
		bbcFeed
	};

}




