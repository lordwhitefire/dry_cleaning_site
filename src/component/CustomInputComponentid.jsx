import React, { useState } from 'react';

const CustomInputComponentid = ({ value, onChange, isReadOnly }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChangeid = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <textarea
    readOnly={isReadOnly} // Set readOnly based on the isReadOnly prop
      value={inputValue}
      onChange={handleInputChangeid}
      className="inline-block w-[8rem] py-3 text-lg h-[3rem] border border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-100"
      style={{ scrollbarWidth: 'none' }}
      // Additional props and styling
    ></textarea>
  );
};

export default CustomInputComponentid;
