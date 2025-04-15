const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  MONGODB: process.env.MONGODB || "https://cloud.mongodb.com/v2/67fdf6c7910fb26cfb10ef8a#/setup/personalization",
  OWNER_NUM: process.env.OWNER_NUM || "94772194789",
};
