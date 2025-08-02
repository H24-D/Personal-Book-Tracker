-- CREATE DATABASE tracker_db;
use tracker_db;
CREATE TABLE book_tracker(
id VARCHAR(36) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
author VARCHAR(255) NOT NULL,
status ENUM('read','reading','to-read') NOT NULL,
review TEXT
);
