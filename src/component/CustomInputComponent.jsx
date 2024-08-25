import React, { useState } from 'react';

const CustomInputComponent = ({ value, onChange, isReadOnly }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <textarea
    readOnly={isReadOnly} // Set readOnly based on the isReadOnly prop
      value={inputValue}
      onChange={handleInputChange}
      className="inline-block w-[12rem] text-center py-4 text-lg h-[4rem] border border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-100"
      style={{ scrollbarWidth: 'none' }}
      // Additional props and styling
    ></textarea>
  );
};

export default CustomInputComponent;
