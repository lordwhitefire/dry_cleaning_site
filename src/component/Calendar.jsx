import React, { useState } from 'react';
import { isSameDay, getMonthFirstDay, getMonthDays } from '../helpers/dateTimeHelpers';


const Calendar = ({onDateSelect}) => {
    const THIS_YEAR = +(new Date().getFullYear());

// (int) The current month starting from 1 - 12
// 1 => January, 12 => December
 const THIS_MONTH = +(new Date().getMonth()) + 1;

  // Dummy data for days of the week and days of the month
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const CALENDAR_MONTHS1 = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 // Calendar months names and short names

 const getPreviousMonth = (month, year) => {
    const prevMonth = (month > 1) ? month - 1 : 12;
    const prevMonthYear = (month > 1) ? year : year - 1;
    return { month: prevMonth, year: prevMonthYear };
  }

  const getNextMonth = (month, year) => {
    const nextMonth = (month < 12) ? month + 1 : 1;
    const nextMonthYear = (month < 12) ? year : year + 1;
    return { month: nextMonth, year: nextMonthYear };
  }

   // i used currentMonth1 , and currentYear1 so that it doesn't clash with the one below
 const [currentMonth, setCurrentMonth] = useState(THIS_MONTH);
 const [currentYear, setCurrentYear] = useState(THIS_YEAR);
 const [selectedDate, setSelectedDate] = useState(null);

 const handlePreviousMonth = () => {
   const { month, year } = getPreviousMonth(currentMonth, currentYear);
   setCurrentMonth(month);
   setCurrentYear(year);
 };

 const handleNextMonth = () => {
   const { month, year } = getNextMonth(currentMonth, currentYear);
   setCurrentMonth(month);
   setCurrentYear(year);
 };

 // Get the current date
 const currentDate = new Date();
 const currentDay = currentDate.getDate();

  // Get the number of days in the current month and the first day of the month
  const monthDays = getMonthDays(currentMonth, currentYear);
  const monthFirstDay = getMonthFirstDay(currentMonth, currentYear);
  // Generate the array of dates for the current month
  const calendarDates = [];
 // Fill in the dates from the previous month
 const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(currentMonth, currentYear);
 const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);
 for (let i = monthFirstDay - 1; i > 0; i--) {
   calendarDates.push({
     day: prevMonthDays - i + 1,
     month: prevMonth,
     year: prevMonthYear,
     isCurrentMonth: false,
     isCurrentDay: false
   });
 }

 // Fill in the dates for the current month
 for (let i = 1; i <= monthDays; i++) {
   calendarDates.push({
     day: i,
     month: currentMonth,
     year: currentYear,
     isCurrentMonth: true,
     isCurrentDay: isSameDay(new Date(currentYear, currentMonth - 1, i), currentDate)
   });
 }

 // Fill in the remaining dates from the next month
 const { month: nextMonth, year: nextMonthYear } = getNextMonth(currentMonth, currentYear);
 const remainingDays = 42 - calendarDates.length; // Total cells in the calendar
 for (let i = 1; i <= remainingDays; i++) {
   calendarDates.push({
     day: i,
     month: nextMonth,
     year: nextMonthYear,
     isCurrentMonth: false,
     isCurrentDay: false
   });
 }

 const handleDateClick = (date) => {
  setSelectedDate(date);
  onDateSelect(date);
};

 
  return (
    <div className="">
      <div className="flex bg-awhite  lg:w-[27rem] shadow-lg rounded-xl">
        <div className="flex flex-col">
          <div className="flex divide-x">
            <div className="flex flex-col px-6 pt-5 pb-6 ">
              {/* Month header */}
              <div className="flex items-center pl-[0.5rem] justify-between mb-[1rem]">
                <div className=" lg:text-[1.4rem] text-[1.2rem] font-semibold">{CALENDAR_MONTHS1[currentMonth]} {currentYear}</div>
                <div className='flex gap-x-[0.6rem]'>
                <button
  className={`flex items-center justify-center p-2 rounded-xl hover:bg-gray-50 ${
    currentMonth === THIS_MONTH && currentYear === THIS_YEAR ? 'text-[#A0AEC0] ' : 'cursor-pointer'
  }`}
  disabled={currentMonth === THIS_MONTH && currentYear === THIS_YEAR}
  onClick={handlePreviousMonth}
>
  <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
    <path
      d="M13.25 8.75L9.75 12l3.5 3.25"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

                  <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50"onClick={handleNextMonth}>
                    <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                      <path
                        d="M10.75 8.75l3.5 3.25-3.5 3.25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Days of the week */}
              <div className="grid grid-cols-7 text-xs text-center ">
                {daysOfWeek.map(day => (
                  <span key={day} className="flex items-center justify-center lg:text-[1rem] text-[0.9rem] h-[2.8rem] w-[2.8rem] lg:w-[3.5rem] lg:h-[3.5rem] font-semibold rounded-lg">{day}</span>
                ))}
              </div>
              {/* Days of the month */}
              <div className="grid grid-cols-7 grid-rows-5  text-xs text-center ">
                {calendarDates.map((date, index) => (
                  <span
                    key={index}
                    className={`flex border lg:text-[1rem] gap-[0.2rem] hover:text-awhite border-alight  items-center justify-center h-[2.8rem] w-[2.8rem]  lg:w-[3.5rem] lg:h-[3.5rem]  ${
                      date.isCurrentDay ? 'bg-[#0100BB] text-awhite' : ''
                    } ${
                      !date.isCurrentMonth ? 'bg-alight text-[#d4d4d4]' : ''
                  } ${
                      selectedDate && isSameDay(new Date(date.year, date.month - 1, date.day), selectedDate) ? 'text-awhite bg-[#fcd34d]' : 'hover:bg-abermuda' // Change text color if date is selected
                  }`}
                  onClick={() => handleDateClick(new Date(date.year, date.month - 1, date.day))}
              >
                    {date.day}
                  </span>
                ))}
              </div>
            </div>
            {/* Add another month calendar if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
