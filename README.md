<h1><b> MongoConnect v2.0 </b> <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/b7fc024ffbf64d2dfd63b0ccdad5a5ef822a236f/NodeJS/StoreRoom/mongodb-leaf_32x32.png?raw=true"></h1>

A full-stack web application that allows users to Create, Read, Update, and Delete data using:

* MongoDB for the database
* Express.js for the server
* EJS for templating
* SweetAlert2 for user-friendly alerts

<br>

### Watch Video Preview :

<a href="https://youtu.be/VzXp1N2CIIo">
  <img src="https://img.youtube.com/vi/VzXp1N2CIIo/maxresdefault.jpg" alt="Video Thumbnail: MongoConnect Crud App" width="100%">
</a>
<!--![Watch the video](https://img.youtube.com/vi/M9hFs5zxzLI/maxresdefault.jpg) -->



## Features

* Add user data (Name, RBT, Division, Email, Content)
* Retrieve data by RBT
* Update existing entries
* Delete records with confirmation prompt
* Responsive and clean UI
* Uses `.env` for sensitive config

<br>

## Project Structure

```
project-root/
├── .env                    # Environment variables (not committed)
├── package.json            # Project dependencies and scripts
├── server.js               # Entry point for Express server
│
├── models/
│   └── MongoConnectDB.js   # Mongoose schema/model
│
├── public/
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── images/
│       ├── mongodb.png
│       └── mongodb2.png
│
├── views/
│   ├── index.ejs           # Main form view
│   └── partials/
│       └── getForm.ejs     # Partial for retrieve form
│
└── README.md
```

<br>

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Yash-Bandal/MongoConnect-v2.0.git
```
```
 cd MongoConnect-v2.0   
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add your MongoDB connection string: <br>
(Uncomment the code for using `dotenv`)

```env
MONGO_URI=mongodb://localhost:27017/MongoConnectDB
```


### 4. Run the App

```bash
node server.js
```
```bash
nodemon server.js
```

Then open your browser and go to:

```
http://localhost:4000
```

<br>

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Bootstrap 5
* SweetAlert2


<br>

## Dependencies

```bash
npm install
```

if not work 
```bash
npm install express mongoose dotenv ejs body-parser
```

<br>

## License

This project is licensed under the MIT License.

<br>

## Author

Developed by \[YB-Productions]
