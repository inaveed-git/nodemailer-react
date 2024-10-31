import mongoose from "mongoose";

let emailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

let Email = mongoose.model("Email", emailSchema);

export default Email;
