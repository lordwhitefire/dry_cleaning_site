import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const BookNow1 = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    landmark: '',
    description: '',
    instructions: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      // Send form data to API endpoint using Axios
      const response = await axios.post('https://rapidclean-laundry.onrender.com/api/user/register', formData);

      console.log('Form submitted successfully');
      setIsLoading(false); 
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setIsLoading(false); 
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle email input changes and validation
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      email: value
    });

    // Check if email format is valid
    const isValid = validateEmail(value);
    setErrors({
      ...errors,
      email: isValid ? '' : 'Invalid email format'
    });
  };
  // Function to validate phone number format
  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for phone number validation with country code
    const regex = /^\+\d{3}-\d{3,4}-\d{4}$/;
    return regex.test(phoneNumber);
};
  // Function to handle phone number input changes and validation
  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      phoneNumber: value
    });

    // Check if phone number format is valid
    const isValid = validatePhoneNumber(value);
    setErrors({
      ...errors,
      phoneNumber: isValid ? '' : 'Invalid phone number format'
    });
  };

  return (
    <div className="w-full">
      <Navbar />
      {/* Division A */}
      <div className='max-w-[80rem] mx-auto px-20 mt-8 '>
        <h2 className="text-3xl  text-[#0100bb] font-semibold mb-8">Book Now</h2>
      

      {/* Division B */}
      <div >
        {/* Form */}
        <form className="grid  grid-cols-2 gap-y-8 gap-x-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required  placeholder="E.g Oge Okoye" className="mt-1 p-2 border border-[#A0AEC0] rounded-[0.1rem] w-full" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleEmailChange} required  placeholder="e.g example@gmail.com" className={`mt-1 p-2 border rounded-[0.1rem] w-full ${errors.email ? 'border-red-500' : 'border-[#A0AEC0]'}`} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
         {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handlePhoneNumberChange}  required  placeholder="+123-456-7890"  className={`mt-1 p-2 border rounded-[0.1rem] w-full ${errors.phoneNumber ? 'border-red-500' : 'border-[#A0AEC0]'}`} />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="e.g 9 alien avenue Abuja" className="mt-1 p-2 border border-[#A0AEC0] rounded-[0.1rem] w-full" required  />
          </div>

          {/* Closest Landmark */}
          <div>
            <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Closest Landmark</label>
            <input type="text" id="landmark" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="e.g Ikeja"  className="mt-1 p-2 border border-[#A0AEC0] rounded-[0.1rem] w-full" required  />
          </div>

              {/* Name2 */}
              <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g Oge Okoye" className="mt-1 p-2 border border-[#A0AEC0] rounded-[0.1rem] w-full" required  />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="e.g shirts-5 trousers-2"  rows="4" className="mt-1 p-2 border border-[#A0AEC0] rounded-[0.2rem] w-[19rem]"></textarea>
          </div>

          {/* Special Instructions */}
          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Special Instructions</label>
            <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} placeholder="wash cloths with deodorant"  rows="4" className="mt-1 p-2 border border-[#A0AEC0] rounded-[0.2rem] w-[19rem]"></textarea>
          </div>

          <button id="signupButton" className='  text-[1rem] w-[15rem] font-medium ml-[25rem] px-12 py-2 active:bg-rose-500 text-awhite rounded-md bg-[#0100BB] text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span className="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Submit'
                    )}
                </button>
               
        
        </form>

      </div>
         {/* Submit Button */}
         
          
          </div>
    </div>
  );
};

export default BookNow1;
