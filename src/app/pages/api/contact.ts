import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your Gmail address
        pass: 'your-app-password',   // Replace with your Gmail app password
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'ranabismah178@gmail.com', // Destination email
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new contact form submission:
        \nName: ${name}
        \nPhone: ${phone}
        \nEmail: ${email}
        \nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email.', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


