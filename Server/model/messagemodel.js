const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat', // Reference to the Chat model
      required: true,
    },
  },
  {
    timestamps: true, // Corrected spelling
  }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;