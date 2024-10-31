import express from "express";
import connectDb from "./config/DB/connectDb.js";
import emailRouter from "./routes/email.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
connectDb();

// Middleware to parse JSON requests
app.use(express.json());

// Routing
app.use("/user", emailRouter); // Correctly sets up /user/send-email endpoint

// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
