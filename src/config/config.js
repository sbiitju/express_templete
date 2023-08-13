const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 5001,

  mongoose: {
    url: process.env.MONGODB_URL,
    options: {},
  },
};
