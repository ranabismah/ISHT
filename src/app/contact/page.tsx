"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus(result.error || "Error sending message.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
      
      {/* Contact Details */}
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        <p><strong>Address:</strong> Iqra Sweet Home, House No. R-18, Phase 1, Defence View, Shaheed-eMillat Road, Ext. Karachi.</p>
        <p><strong>Phone:</strong> 021-38892198 Ext. 9933</p>
        <p><strong>WhatsApp:</strong> 92-328-2288900</p>
        <p>
          <a
            href="https://www.google.com/maps/place/Iqra+Sweet+Home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            View on Google Maps
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium" htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows={5}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
            Send & Connect With Us
          </button>
        </div>
      </form>

      {status && <div className="mt-4 text-center text-lg">{status}</div>}
    </div>
  );
}
