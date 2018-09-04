-- Create users table
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	email varchar(255),
	password_hash varchar(255)
);

-- Create users table
CREATE TABLE IF NOT EXISTS news (
	news_id SERIAL PRIMARY KEY,
	name varchar(255),
	category varchar(255),
	url varchar(255)
	-- display varchar(255)
);

CREATE TABLE IF NOT EXISTS preferences(
	preferences_id SERIAL PRIMARY KEY,
	name varchar(255),
	category varchar(255),
	url varchar(255)
);
-- CREATE TABLE IF NOT EXISTS selection(
-- 	selection_id SERIAL PRIMARY KEY,
-- 	name varchar(255),
-- 	url varchar(255),

-- );

