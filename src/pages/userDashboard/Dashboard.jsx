import React, { useState, useEffect } from 'react'
// import UpdateProfile from './UpdateProfile'
import CircularProgress from '../../utils/CircularProgress'
import Topbar from '../../component/Topbar'

const Dashboard = () => {
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [profileData, setProfileData] = useState({});

  
  useEffect(() => {
    // Simulating profile data retrieval
    const fetchedProfileData = {
      fullName: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
      address: "123 Main St",
      city: "Anytown",
      lga: "Local Government Area",
      state: "State",
    };

    setProfileData(fetchedProfileData);

    // Calculate profile completion
    const completionPercentage = calculateProfileCompletion(fetchedProfileData);
    setProfileCompletion(completionPercentage);
  }, []);

  const calculateProfileCompletion = (profileData) => {
    // Define required fields
    const requiredFields = ["fullName", "email", "phoneNumber", "address", "city", "lga", "state"];
  
    // Count filled required fields
    let filledFieldsCount = 0;
    requiredFields.forEach((field) => {
      if (profileData[field]) {
        filledFieldsCount++;
      }
    });
  
    // Calculate completion percentage
    const completionPercentage = (filledFieldsCount / requiredFields.length) * 100;
    return completionPercentage;
  };

  const progress = 75; // Change this value to see the progress
  return (
    <div className='w-full bg-[#FEFEFE] max-w-screen-4xl min-h-screen  mx-auto'>
       <Topbar />
      <div className='flex flex-col '>
       
        <div className='mx-10 mt-8 mb-16'>
          {/* {profileCompletion < 100 && (
            <div>
              <h2 className='text-2xl font-bold'>Complete your profile</h2>
              <CircularProgress progress={profileCompletion} />
            </div>
          )} */}
          <div className='bg-light w-full px-9 py-11 rounded-lg shadow-xl'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-32'>
              <div className=''>
                <h2 className='text-3xl font-semibold'>Update your account</h2>
                <p className='text-lg font-semibold mt-4'>By updating your account information, you'll unlock a seamless laundry experience tailored to your preferences.</p>
              </div>
              <div className="mr-0 md:mr-24 ">
                <CircularProgress percentage={progress} size="60" />
              </div>
            </div>
            <button className='mt-14 text-center text-white bg-midnight rounded-lg w-full md:w-44 px-4 py-2'>
              <a href='/update-profile'>Update Account</a>
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div className='bg-light w-full px-9 py-11 rounded-lg shadow-xl'>
              <div className='h-24 flex flex-col justify-between'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <p className='text-lg font-semibold'>Total Orders</p>
              </div>
            </div>
            <div className='bg-light w-full px-9 py-11 rounded-lg shadow-xl'>
              <div className='h-24 flex flex-col justify-between'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <p className='text-lg font-semibold'>Recieved Orders</p>
              </div>
            </div>
            <div className='bg-light w-full px-9 py-11 rounded-lg shadow-xl'>
              <div className='h-24 flex flex-col justify-between'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <p className='text-lg font-semibold'>Pending Orders</p>
              </div>
            </div>
            <div className='bg-light w-full px-9 py-11 rounded-lg shadow-xl'>
              <div className='h-24 flex flex-col justify-between'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <p className='text-lg font-semibold'>Notifications</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard