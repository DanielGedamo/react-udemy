const mongoose = require("mongoose");
const config = require("config");
// const { LogError } = require("concurrently");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db,{userNewUrlParser: true
    });

    console.log("connected to MongoDB");

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
