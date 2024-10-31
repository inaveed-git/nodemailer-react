import { useState } from "react";
import axios from "axios";

function EmailContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update handleChange to correctly read input values
  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly destructuring name and value
    setFormData({ ...formData, [name]: value }); // Update formData
  };

  // Update handleSubmit to prevent default behavior and send the data
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      let response = await axios.post("/user/send-email", formData);
      // Optionally handle response or show a success message
      console.log("Email sent successfully:", response.data);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailContact;
