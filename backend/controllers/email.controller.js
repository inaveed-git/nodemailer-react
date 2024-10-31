import nodemailer from "nodemailer";
import Email from "../models/email.model.js";

const sendEmail_and_saveEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save email to the database
    const emailSaved = await Email.create({
      name,
      email,
      message,
    });

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Recipient email
      subject: `${name} from the contact form`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response after both saving and sending email
    res.status(200).json({
      success: true,
      message: "Email sent and data saved!",
      emailSaved,
    });
  } catch (error) {
    console.error("Error details:", error); // Log the specific error

    // Send a more detailed error message in the response
    res.status(500).json({
      success: false,
      error: error.message || "Error sending email or saving data",
    });
  }
};

export { sendEmail_and_saveEmail };
