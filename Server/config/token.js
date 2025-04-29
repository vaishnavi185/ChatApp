const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',  // Token expires in 30 days
    });
};

module.exports = generateToken;
