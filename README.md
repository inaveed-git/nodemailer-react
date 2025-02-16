# **React-Node Email Sender with Nodemailer and MongoDB**

This project enables users to send emails via a web application, featuring a **React** and **Tailwind CSS** frontend and a **Node.js** and **Express** backend. Email functionality is powered by [Nodemailer](https://www.npmjs.com/package/nodemailer), and MongoDB is used as the database.

## ScreenShot

![shot](frontend/public/assets/picShort.PNG)

## Project Overview

- **Frontend**: Built with React, styled using Tailwind CSS.
- **Backend**: Node.js with Express, organized with:
  - **controllers**: Manages email-sending logic.
  - **routes**: Defines API endpoints.
  - **models**: Database schemas.
  - **config/DB/connectDb.js**: Sets up the MongoDB connection.

## Prerequisites

- **Node.js** for local server setup.
- **Nodemailer** for email functionality.
- **MongoDB** for database storage.
- **Environment Variables** for configuration.
- **Google App Password** for secure email integration.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/inaveed-git/nodemailer-react.git
   cd nodemailer-react
   ```

2. **Setup Environment Variables**

   In the `backend` directory, create an `.env` file with:

   ```plaintext
   DB_URL=mongodb://127.0.0.1:27017/
   DB_NAME=email

   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

   Replace `your-email@gmail.com` with your Gmail address and `your-app-password` with the app password (see below).

### Creating a Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security).
2. Under “Signing in to Google,” select **App Passwords**.
3. Choose **Mail** as the app, enter "Nodemailer" as the custom name, and **Generate**.
4. Copy the generated 16-character password into `EMAIL_PASSWORD` in `.env`.

## Running the Application

### Backend

1. Move to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

### Frontend

1. Open a new terminal and navigate to the frontend:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the frontend:
   ```bash
   npm run dev
   ```

## Additional Notes

- **React DevTools**: Consider installing for an improved development experience.
- **Nodemailer Documentation**: [Nodemailer Docs](https://www.npmjs.com/package/nodemailer)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
---

**Contact**: For issues or questions, email [inaveed.contact@gmail.com](mailto:inaveed.contact@gmail.com).

```

```
