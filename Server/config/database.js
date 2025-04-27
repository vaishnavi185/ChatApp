const mongoose = require('mongoose');

const connect = async (Database_url) => {
  try {
    const dbOptions = {
      dbName: 'ChatApp',
    };
    await mongoose.connect(Database_url, dbOptions);
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connect;
