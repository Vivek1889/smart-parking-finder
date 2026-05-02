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

    let message = {
      from: "vivek kumar <viveksh94108@gmail.com>",
      to: "viveksh94108@gmail.com",
      subject: "Test email by Vivek",
      text: "Hello dosto kaise hain aap!",
      html: "<p><b>Hello</b> my friends</p>",
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
