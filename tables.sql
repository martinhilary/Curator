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
	url varchar(255)
);