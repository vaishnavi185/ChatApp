const express = require('express');
const router = express.Router();
const protect = require('../middleware/Authmiddleware');
const { sendMessage, getAllMessages } = require('../Controller/messagecontroller'); // Correct import

// Route to send a message
router.route('/send').post(protect, sendMessage);

// Route to fetch all messages of a chat
router.route('/:chatId').get(protect, getAllMessages);

module.exports = router;