const Message = require('../model/messagemodel');
const Chat = require('../model/chatmodel');
const User = require('../model/Usermodel');

// Controller to send a message
const sendMessage = async (req, res) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
        return res.status(400).json({ message: "Invalid data passed into request" });
    }

    try {
        let newMessage = {
            sender: req.user._id,
            content: content,
            chat: chatId,
        };

        let message = await Message.create(newMessage);

        message = await message.populate("sender", "name ");
        message = await message.populate("chat");
        message = await message.populate("reciever");
        message = await User.populate(message, {
            path: "chat.users",
            select: "name  email",
        });

        await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ message: "Failed to send message", error: error.message });
    }
};

// Controller to fetch all messages of a chat
const getAllMessages = async (req, res) => {
    const { chatId } = req.params;

    try {
        const messages = await Message.find({ chat: chatId })
            .populate("sender", "name  email")
            .populate("reciever")
            .populate("chat");

        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json({ message: "Failed to fetch messages", error: error.message });
    }
};

module.exports = { sendMessage, getAllMessages };