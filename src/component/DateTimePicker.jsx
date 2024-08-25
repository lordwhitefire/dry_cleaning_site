import React, { useState } from 'react';
import Calender from './Calendar'

const DateTimePicker = () => {
  // State for selected date and time
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Function to handle booking service
  const handleBookService = () => {
    // Logic to book the service using selectedDate and selectedTime
    console.log('Service booked for:', selectedDate, selectedTime);
  };

  // Function to generate time options for booking
  const generateTimeOptions = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const timeOptions = [];

    // Working hours: 9:00am to 5:00pm
    for (let hour = 9; hour <= 17; hour++) {
      // Check if it's past the current hour for today
      if ((currentHour < hour || (currentHour === hour && currentMinute < 0)) || currentTime.getDate() !== new Date().getDate()) {
        // Add zero-padding for minutes
        const minutes = (hour === currentHour && currentMinute > 0) ? 0 : (currentMinute < 10 ? '0' + currentMinute : currentMinute);
      //  ${minutes}${hour >= 12 ? 'pm' : 'am'} this can be used instead of 00 below if minutes is needed
        // Format time in 12-hour format with AM/PM
        const time = `${hour > 12 ? hour - 12 : hour}:00`;
        timeOptions.push(time);
      }
    }

    return timeOptions;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date); // Update the selectedDate state
  };
  // Generate time options
  const timeOptions = generateTimeOptions();

  return (
    <div className="lg:w-[35rem] rounded-[0.5rem] relative lg:top-[2rem] lg:left-[2rem] flex flex-col items-center bg-[#ECF0F5] py-[3rem]">
      <h2 className="lg:text-[1.5rem] text-[#0100BB] text-[1.1rem] font-semibold mb-8">Select Your Most Preferred Date and Time</h2>
      
      {/* Div B: Select Pickup Date */}
      <div className="mb-10 w-[20rem] lg:w-[27rem]">
        <h3 className="font-semibold mb-4 text-[1rem] text-[#0100BB] ">Select Pickup Date</h3>
        {/* Date input */}
        <Calender onDateSelect={handleDateSelect}  />
      </div>

      {/* Div C: Select Pickup Time */}
      <div className="mb-8 w-[18rem] lg:w-[27rem]">
        <h3 className="font-semibold text-[1rem] text-[#0100BB] mb-4">Select Pickup Time</h3>
        {/* Time buttons */}
        <div className='flex  gap-x-[1rem] overflow-x-auto ' style={{ scrollbarWidth: 'none' }}>
          {timeOptions.map((time, index) => (
            <button key={index} onClick={() => setSelectedTime(time)} className={`py-1 px-2 rounded-md text-sm  ${selectedTime === time ? ' bg-[#0100BB] text-awhite' : 'bg-[#ADADAD] '}`} >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Div D: Book Service Button */}
      <div>
        <button onClick={handleBookService} className="text-awhite -ml-[2rem] bg-[#0100BB] hover:text-awhite px-10 py-2 rounded-md  text-[1rem] font-medium">Proceed</button>
      </div>
    </div>
  );
};

export default DateTimePicker;
