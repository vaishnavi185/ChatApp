const express = require('express');
const jwt = require('jsonwebtoken');
const expressAsynHandler = require('express-async-handler');
const generateToken = require('../config/token.js');
const user = require('../model/Usermodel');
const bcrypt = require('bcryptjs');

// Login Controller
const logincontroller = expressAsynHandler(async (req, res) => {
    const { name, passward } = req.body;

    // Find the user by name
    const User = await user.findOne({ name });

    if (User) {
        console.log("User Found:", User);
        console.log("Plain Text Password:", passward);
        console.log("Hashed Password from DB:", User.passward);

        const isMatch = await bcrypt.compare(passward, User.passward);
        console.log("Password Match:", isMatch);

        if (isMatch) {
            res.status(201).json({
                _id: User._id,
                name: User.name,
                email: User.email,
                isAdmin: User.isAdmin,
                token: generateToken(User._id),
            });
        } else {
            res.status(400).json({ message: "Invalid username or password" });
        }
    } else {
        res.status(400).json({ message: "Invalid username or password" });
    }
});

// Register Controller
const registercontroller = expressAsynHandler(async (req, res) => {
    const { name, email, passward } = req.body;

    if (!name || !email || !passward) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    const userexist = await user.findOne({ email });
    if (userexist) {
        return res.status(400).json({ message: "User with this email already exists" });
    }

    const username = await user.findOne({ name });
    if (username) {
        return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(passward, 10);
    console.log("Hashed Password During Registration:", hashedPassword);

    const newuser = await user.create({
        name,
        email,
        passward, // Save the hashed password
    });

    if (newuser) {
        res.status(201).json({
            _id: newuser._id,
            name: newuser.name,
            email: newuser.email,
            isAdmin: newuser.isAdmin,
            token: generateToken(newuser._id),
        });
    } else {
        res.status(400).json({ message: "User not created" });
    }
});

// Fetch Users Controller
const fetchuser = expressAsynHandler(async (req, res) => {
    try {
        const keyword = req.query.search
            ? {
                  $or: [
                      { name: { $regex: req.query.search, $options: "i" } },
                      { email: { $regex: req.query.search, $options: "i" } },
                  ],
              }
            : {};

        // Fetch users excluding the currently logged-in user
        const users = await user.find({
            ...keyword,
            _id: { $ne: req.user._id }, // Exclude the logged-in user
        }).select("-passward"); // Exclude the password field

        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ message: "Failed to fetch users" });
    }
});



module.exports = { logincontroller, registercontroller, fetchuser };