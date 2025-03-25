import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Debug endpoint to check environment variables
app.get('/api/debug', (req, res) => {
  res.json({
    gmailUser: process.env.GMAIL_USER,
    hasAppPassword: !!process.env.GMAIL_APP_PASSWORD,
    nodeEnv: process.env.NODE_ENV
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log('Received contact form submission:', { name, email, subject });
    console.log('Environment check:', {
      gmailUser: process.env.GMAIL_USER,
      hasAppPassword: !!process.env.GMAIL_APP_PASSWORD
    });

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create transporter with debug logging
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      debug: true, // Enable debug logging
    });

    console.log('Verifying transporter configuration...');
    try {
      // Verify transporter configuration
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      if (verifyError.code === 'EAUTH') {
        return res.status(500).json({
          success: false,
          message: 'Gmail authentication failed. Please check your email and app password.',
          error: verifyError.message
        });
      }
      throw verifyError;
    }

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack,
      response: error.response,
      responseCode: error.responseCode
    });
    
    let errorMessage = 'Error sending email';
    if (error.code === 'EAUTH') {
      errorMessage = 'Gmail authentication failed. Please check your email and app password.';
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Could not connect to Gmail server. Please check your internet connection.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Socket error occurred. Please try again.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.message,
      code: error.code,
      details: error.response || error.stack
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Environment check:', {
    gmailUser: process.env.GMAIL_USER,
    hasAppPassword: !!process.env.GMAIL_APP_PASSWORD,
    nodeEnv: process.env.NODE_ENV
  });
}); 