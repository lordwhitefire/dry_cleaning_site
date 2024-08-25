// ToggleSwitch.js
import React, { useState } from 'react';
import '../index.css';

const ToggleSwitch = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onClick(); // Call the onClick prop when toggled
  };

  return (
    <label className="flex items-center w-full justify-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="toggle__line"></div>
        <div className="toggle__dot"></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
