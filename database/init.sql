ALTER USER 'root'@'localhost' IDENTIFIED BY '123';
CREATE DATABASE IF NOT EXISTS flaskcommerce;
CREATE USER IF NOT EXISTS 'flaskcommerce_user'@'%' IDENTIFIED BY '123';
GRANT SELECT, UPDATE, DELETE, INSERT, CREATE ON flaskcommerce.* TO 'flaskcommerce_user'@'%';