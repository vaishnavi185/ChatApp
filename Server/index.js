const express = require('express');
const dotenv = require('dotenv');
const connect = require('./config/database.js');
const userroutes=require('./routes/userroutes.js')
const chatroute=require('./routes/chatroutes.js')
const messageRoutes = require("./routes/messageroutes.js")

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const Database_url = process.env.DATABASE_URL;

// Connect to the database
connect(Database_url);

app.use(express.json());
app.use('/user', userroutes);
app.use('/chat',chatroute)
app.use('/message',messageRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});