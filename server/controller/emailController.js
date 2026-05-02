let nodemailer = require("nodemailer");

exports.sendOtp = async (req, res) => {
  try {
    let transport = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "viveksh94108@gmail.com",
        pass: "vvrpuybuatfmtsag",
      },
    });

    let otp = Math.floor(100000 + Math.random() * 900000);
    let message = {
      from: "vivek kumar <viveksh94108@gmail.com>",
      to: "viveksh94108@gmail.com",
      subject: "otp for email verification",
      text: `Your OTP is ${otp}`,
      html: `<p> Your OTP is ${otp} <br/> This is a server generated email please don't reply to it....</p>`,
    };

    let info = await transport.sendMail(message);

    res.json({
      success: true,
      message: "Email sent successfully",
      info,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
