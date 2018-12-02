DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id integer primary key AUTO_INCREMENT,
  burger_name varchar(25),
  devoured boolean
);

create user burger@localhost identified with mysql_native_password by 'burger';
grant all privileges on burgers_db.* to burger@localhost;
