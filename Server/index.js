const express = require('express');
const dotenv = require('dotenv');
const connect = require('./config/database.js');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const Database_url = process.env.DATABASE_URL;

// Connect to the database
connect(Database_url);

// Start the server
app.listen(port, () => {
  console.log("Server is running at", port);
});
