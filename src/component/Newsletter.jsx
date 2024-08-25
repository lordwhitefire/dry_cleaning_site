import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const isEmailValid = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('https://your-backend-url.com/newsletter/subscribe', { email });
      
      if (response.status === 200) {
        // Subscription successful
        setSubscribed(true);
        setError('');
      } else {
        // Handle other status codes
        setError('An error occurred. Please try again later.');
      }
    } catch (error) {
      // Handle request error
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    // <div className="max-w-md mx-auto">
    //   <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
    //   {subscribed ? (
    //     <p className="text-green-500">Thank you for subscribing!</p>
    //   ) : (
    //     <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Your Email Address"
    //         className="border border-gray-300 rounded-md px-4 py-2"
    //         required
    //       />
    //       {error && <p className="text-red-500">{error}</p>}
    //       <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
    //         Subscribe
    //       </button>
    //     </form>
    //   )}
    // </div>
    <div className="text-center sm:text-left md:col-span-4 lg:col-span-3 ml-0 lg:ml-44">
        <p className="text-lg font-semibold text-midnight ">Subscribe to our newsletter</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
            <p className="text-left leading-relaxed text-base text-purple ltr:sm:text-left">
                The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            {subscribed ? (
                <p className="text-green-500">Thank you for subscribing!</p>
            ) : (
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                    <label htmlFor="email" className="sr-only">Email</label>

                    <input
                        className="w-full rounded border-none outline-none bg-[#ADADAD] px-6 py-3 shadow-sm"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                    {error && <p className="text-[#Ff0000]">{error}</p>}
                    <button
                        className="block rounded-lg  bg-purple px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </div>
            </form> 
            )}    
        </div>
    </div>
  );
};

export default NewsletterForm;
