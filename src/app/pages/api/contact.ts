import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    const msg = {
      to: "ranabismaqasim@gmail.com", // Receiver's email
      from: process.env.NEXT_PUBLIC_SENDGRID_SENDER as string, // Sender's verified email
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}

        ---
        Contact Details:
        Address: Iqra Sweet Home, House No. R-18, Phase 1, Defence View, Shaheed-eMillat Road, Ext. Karachi.
        Phone: 021-38892198 Ext. 9933
        WhatsApp: 92-328-2288900
        Google Maps: Iqra Sweet Home Location
      `,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}

