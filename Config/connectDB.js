const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbname: "demoProject",
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("DB Connected Successfully...");
  } catch (err) {
    console.log("DB is not connected");
  }
};

module.exports = connectDB;
