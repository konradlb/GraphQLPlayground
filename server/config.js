const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mongoCode: process.env.MONGO_CODE,
};
