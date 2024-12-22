"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        reset();
      } else {
        setSuccessMessage('Failed to send your message. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('Error occurred while sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Please fill out the form below, and we'll get back to you shortly.
        </p>
        {successMessage && (
          <p className={`mb-4 text-sm ${successMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {successMessage}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              {...register('phone', { required: 'Phone number is required' })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send & Connect With Us'}
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">Contact Details</h2>
          <p className="text-gray-600">
            Address: Iqra Sweet Home, House No. R-18, Phase 1, Defence View, Shaheed-e-Millat Road, Ext. Karachi.
          </p>
          <p className="text-gray-600">Phone: 021-38892198 Ext. 9933</p>
          <p className="text-gray-600">WhatsApp: 92-328-2288900</p>
          <a
            href="https://www.google.com/maps?q=Iqra+Sweet+Home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Map Link: Iqra Sweet Home Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
