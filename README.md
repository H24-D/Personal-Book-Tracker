# Personal Book Tracker

A full-stack web application to help the users to track the books they've read and currently reading, or plan to read.

## Features

- Add a new book with title, author, status (read / reading / to-read), and optional review
- View all books grouped by their reading status
- Edit and delete book entries

## 🛠 Tech Stack

 Frontend  -  React.js           
 Backend   - Node.js + Express  
 Database  -  MySQL                     
 IDE       - Visual Studio Code 

##  Installation & Setup

### 1. Clone the Repository

-git clone https://github.com/H24-D/Personal-Book-Tracker.git

-cd Personal Book Tracker

### 2.Create MySQL Database and Table

-Open MySQL Workbench

 -Connect to your local MySQL server

 ### Run this SQL to Create the Database and Table

 CREATE DATABASE tracker_db;
 
 use tracker_db;
 
 CREATE TABLE book_tracker(
 
 id VARCHAR(36) PRIMARY KEY,
 
 title VARCHAR(255) NOT NULL,
 
 author VARCHAR(255) NOT NULL,
 
 status ENUM('read','reading','to-read') NOT NULL,
 
 review TEXT
 
 );

### 3. Setup Backend

-cd backend

-npm install express mysql2 cors dotenv uuid

-npm start

-run on:http://localhost:5000

### 3. Setup Frontend

-cd../frontend

-npm install axios react-router-dom

-npm start

-run on:http://localhost:3000





