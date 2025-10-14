import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, message, phone } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Missing required fields: firstName, lastName, email, and message are required' 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid email format' 
        });
      }

      // Check if environment variables are set
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing email credentials in environment variables');
        return res.status(500).json({ 
          success: false, 
          message: 'Email service not configured. Please contact the administrator.' 
        });
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `${firstName} ${lastName} <${email}>`,
        to: 'cliveouma5@gmail.com',
        subject: 'Email from Portfolio',
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone || 'Not provided'}</p>
               <p>Message: ${message}</p>`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Something went wrong.';
      
      res.status(500).json({ success: false, message: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
