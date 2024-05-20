# Basic Banking App

This repository contains a basic banking application developed as part of Task 1 for my web development and designing internship at The Sparks Foundation - GRIP internship batch May 2024.

## Features

- **Homepage**: 
  - Two main buttons: 'View Customers' and 'View All Transfers'.

- **View Customers**: 
  - Displays up to 10 customers stored in a MongoDB database.
  - Basic details such as name, email, current balance, etc.
  - Ability to select a customer to view more details and initiate money transfers.

- **View All Transfers**: 
  - Contains a history of all transactions made between customers.

- **Flow**: 
  - Homepage > View All Customers > Select and View One Customer > Transfer Money > Select Customer to Transfer To > View All Transfers.

## Screenshots and Demo video

## Usage

- **Homepage**: Navigate to the homepage to see the options 'View Customers' and 'View All Transfers'.
- **View Customers**: Click on 'View Customers' to see the list of customers. Select a customer to view details and initiate a money transfer.
- **Transfer Money**: From the selected customer's page, initiate a transfer by choosing another customer to transfer money to.
- **View All Transfers**: Click on 'View All Transfers' on the homepage to see the history of all transactions.

## Tech Stack

- **Frontend**: <br>
   
  ![HTML](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white)
  ![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)

- **Backend**: <br>
  
  ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
  ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white)

- **Database**: <br>
-  
   ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)

## Dependencies

- [body-parser](https://www.npmjs.com/package/body-parser): ^1.20.2
- [cors](https://www.npmjs.com/package/cors): ^2.8.5
- [express](https://www.npmjs.com/package/express): ^4.19.2
- [mongoose](https://www.npmjs.com/package/mongoose): ^8.3.5
- [open](https://www.npmjs.com/package/open): ^10.1.0

## Project Structure

The project is organized into the following structure:

project folder/ <br>
├── frontend/
│ ├── app.js
│ ├── index.html
│ └── style.css
├── models/
│ ├── customer.js
│ └── transfer.js
├── routes/
│ ├── customer.js
│ └── transfer.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js


### Description of Files and Folders

- **frontend/**: Contains frontend related files.
  - `app.js`: Main JavaScript file for frontend logic.
  - `index.html`: The main HTML file and entry point of the application.
  - `style.css`: The main stylesheet for the application.

- **models/**: Contains Mongoose schemas.
  - `customer.js`: Schema definition for the customer model.
  - `transfer.js`: Schema definition for the transfer model.

- **routes/**: Contains route definitions.
  - `customer.js`: Routes for handling customer-related requests.
  - `transfer.js`: Routes for handling transfer-related requests.

- `.gitignore`: Specifies which files and directories to ignore in the repository.
- `package-lock.json`: Automatically generated for any operations where npm modifies the node_modules tree or package.json.
- `package.json`: Contains metadata about the project and its dependencies.
- `README.md`: The readme file providing an overview and details about the project.
- `server.js`: The main server file setting up the Express.js application and starting t
  

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:harmeetsingh11/TSF-GRIP-Basic-Banking-System.git

2. Run the following command to install the dev dependencies:
   ```bash
   npm install
   or
   npm i 

3. Open two terminal instances:

    - In one terminal, run MongoDB:
        ```bash
        mongod
    - In the other terminal, navigate to the project directory and start the application. This will automatically open `index.html` in your default browser:
  
       ```bash
       npm start
4. To initialize the customer schema database with dummy data, run the following command the first time you start the project:
   ```bash
   curl -X POST http://localhost:3000/api/customers/initialize
 
