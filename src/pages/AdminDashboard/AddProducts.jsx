import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar'; // Adjust the import based on your actual path

const AddProducts = ({ onAddProduct  }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [launder, setLaunder] = useState('');
  const [iron, setIron] = useState('');
  const [iconUrl, setIconUrl] = useState('');

  
  // Function to generate a unique product ID
  const generateProductId = () => {
    // Generate a random number between 10000 and 99999
    return Math.floor(10000 + Math.random() * 90000);
  };
  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      id: generateProductId(), // Use your method of generating unique IDs
      ProductName: productName,
      Categories: productCategory,
      Price: launder,
      Price1: iron,
      image: iconUrl, // Use the URL directly for the image
    };
    
    console.log('New Product:', newProduct);

    // Call the onAddProduct function passed as a prop
    onAddProduct(newProduct);

    // Clear form fields after submission
    setProductName('');
    setProductCategory('');
    setLaunder('');
    setIron('');
    setIconUrl('');
  };
  const removeUrlWrapper = (urlString) => {
    // Check if the string starts with 'url(' and ends with ')'
    if (urlString.startsWith("url(") && urlString.endsWith(")")) {
      // Remove 'url(' from the beginning and ')' from the end
      return urlString.slice(5, -2);
    } else {
      // Return the original string if it doesn't match the expected format
      return urlString;
    }
  };
  
  // Example usage:

  
  return (
    <div>
      <AdminTopbar />
      <div className="">
        <div className="flex items-center px-8 border-b border-adarkgrey justify-between h-16 lg:h-20">
          <div>
            <p className="lg:text-[2rem] text-[1.1rem] font-semibold">Add Products</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-[65rem] px-8 py-8 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="productName" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="productName"
              className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
                console.log('Product Name:', e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productCategory" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Product Category</label>
            <input
              type="text"
              id="productCategory"
              className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
              value={productCategory}
              onChange={(e) => {
                setProductCategory(e.target.value);
                console.log('Product Category:', e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="launder" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Launder</label>
            <input
              type="number"
              id="launder"
              className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
              value={launder}
              onChange={(e) => {
                setLaunder(e.target.value);
                console.log('Launder Price:', e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="iron" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Iron</label>
            <input
              type="number"
              id="iron"
              className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
              value={iron}
              onChange={(e) => {
                setIron(e.target.value);
                console.log('Iron Price:', e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="iconUrl" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Icon URL</label>
            <input
              type="text"
              id="iconUrl"
              className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
              value={iconUrl}
              onChange={(e) => {
                const cleanedURL = removeUrlWrapper(e.target.value);
                setIconUrl(cleanedURL);
                console.log('Icon URL:', cleanedURL);
              }}
              
            />
          </div>
          <button  type="submit" className="bg-amidnight lg:mt-8 mt-4 text-awhite py-2 px-16 text-[1.2rem] font-semibold rounded-lg hover:bg-blue-600">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
