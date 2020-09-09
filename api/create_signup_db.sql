USE ceo_baemin_signup;

CREATE TABLE member (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id varchar(30) NOT NULL,
	pw varchar(30) NOT NULL,
	email	varchar(100) NOT NULL,
	name varchar(30) NOT NULL,
	phone	varchar(30) NOT NULL,
	zonecode varchar(100) NULL,
	address varchar(100) NULL,
	detail_address varchar(100) NULL,
	old_address varchar(100) NULL,
	agree__mandatory boolean NOT NULL,
	agree__optional boolean NULL
);