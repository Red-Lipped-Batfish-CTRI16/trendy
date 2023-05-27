CREATE DATABASE trendy_app;
USE trendy_app;
CREATE TABLE users (
  user_id integer PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);
CREATE TABLE businesses (
  business_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  address VARCHAR(255),
  ratings DECIMAL(4, 3)
);
CREATE TABLE favorites (
  favorite_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  business_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);
INSERT INTO users (username, location)
VALUES ('Peter', 'AZ');