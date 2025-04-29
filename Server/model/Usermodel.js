const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usermodel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passward: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
usermodel.pre('save', async function (next) {
  if (!this.isModified('passward')) {
    return next(); // If password is not modified, skip hashing
  }

  const salt = await bcrypt.genSalt(10);
  this.passward = await bcrypt.hash(this.passward, salt);
  next();
});

// Password comparison method
usermodel.methods.matchPassward = async function (enteredPassward) {
  return await bcrypt.compare(enteredPassward, this.passward);
};

const user = mongoose.model('user', usermodel);
module.exports = user;
