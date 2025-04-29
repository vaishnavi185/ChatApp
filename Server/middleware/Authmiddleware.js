const jwt = require('jsonwebtoken');
const user = require('../model/Usermodel');
const expressAsynHandler = require('express-async-handler');

const protect = expressAsynHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token

            // Fetch the user from the database and attach it to req.user
            req.user = await user.findById(decoded.id).select('-passward');

            console.log('Authorization Header:', req.headers.authorization);
            console.log('Decoded Token:', decoded);
            console.log('Logged-in User:', req.user);

            next();
        } catch (error) {
            console.error('Token verification error:', error.message);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        console.error('No token provided in the Authorization header');
        res.status(401).json({ message: 'Not authorized, no token' });
    }
});

module.exports = protect;