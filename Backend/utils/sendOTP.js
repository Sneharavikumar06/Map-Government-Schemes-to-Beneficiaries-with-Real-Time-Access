const twilio = require("twilio");
require("dotenv").config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOTP = async (aadhaar, phone) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log(`OTP for Aadhaar ${aadhaar}: ${otp}`);
  return otp;
};

module.exports = sendOTP;
