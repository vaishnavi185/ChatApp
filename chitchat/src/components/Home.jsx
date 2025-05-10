import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', passward: '' }); // Use "passward"
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const router = useRouter(); // Initialize router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (!formData.name || !formData.email || !formData.passward) {
      setError('Please fill all fields');
      setMessage('');
      return;
    }
 console.log('Form Data:', formData);
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:9000/user/register', formData); // Use "passward" in the payload
      setMessage('Signup successful!');
      setError('');
      router.push('/Chat'); // Navigate to chat screen on successful signup
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed.');
      setMessage('');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen bg-gray-100 ${loading ? 'cursor-wait' : ''}`}>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-200 rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center">SIGN UP</h1>
        <p className="text-center font-light text-sm sm:text-base mt-2">
          Welcome user! Hope your chatting experience is good with us.
        </p>
        <div className="flex flex-col space-y-4 mt-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="passward" // Use "passward"
            name="passward"
            placeholder="Passward"
            value={formData.passward}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </div>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
}
