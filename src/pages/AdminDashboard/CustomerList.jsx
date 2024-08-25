import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';
import ToggleSwitch from '../../component/Toggle';
import AdminCustomerPagination from '../../component/AdminCustomerPages';
import CustomInputComponent from '../../component/CustomInputComponent'; // Importing the custom input component
import CustomInputComponentid from '../../component/CustomInputComponentid'; // Importing the custom input component
const CustomerList = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const initialData = [
    { 
      id: 12345, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12346, 
      customer: 'John Doe', 
      phoneNumber: '0801234567', 
      email: 'john.doe@example.com', 
      address: '123, Elm Street', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12347, 
      customer: 'Alice Johnson', 
      phoneNumber: '0909876543', 
      email: 'alice.j@example.com', 
      address: '456, Oak Avenue', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12348, 
      customer: 'Michael Smith', 
      phoneNumber: '0708765432', 
      email: 'michael.s@example.com', 
      address: '789, Maple Street', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12349, 
      customer: 'Emily Wilson', 
      phoneNumber: '0807654321', 
      email: 'emily.w@example.com', 
      address: '1011, Pine Avenue', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12350, 
      customer: 'David Brown', 
      phoneNumber: '0816543210', 
      email: 'david.b@example.com', 
      address: '1213, Cedar Street', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12351, 
      customer: 'Olivia Miller', 
      phoneNumber: '0905432167', 
      email: 'olivia.m@example.com', 
      address: '1415, Birch Road', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12352, 
      customer: 'William Taylor', 
      phoneNumber: '0804321567', 
      email: 'william.t@example.com', 
      address: '1617, Elm Drive', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12353, 
      customer: 'Sophia Anderson', 
      phoneNumber: '0803214567', 
      email: 'sophia.a@example.com', 
      address: '1819, Oak Lane', 
      initialColor: 'bg-[#ffffff]' // white color
    }
  ];
  
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState(initialData);

 // Step 2: Toggle Edit Mode Function
 const toggleEditMode = () => {
  setEditMode(!editMode);
};


  const toggleColor = (index) => {
  
    setIsChecked(!isChecked);
    setData(prevData => {
      const newData = [...prevData];
      const currentColor = newData[index].initialColor;
  
      // Toggle between colors based on isChecked state
      if (isChecked) {
        if (currentColor === 'bg-[#ffffff]') {
          newData[index].initialColor = 'bg-[#adadad]';
        } else if (currentColor === 'bg-[#ecf0f5]') {
          newData[index].initialColor = 'bg-[#b8c7db]';
        }
      } else {
        if (currentColor === 'bg-[#adadad]') {
          newData[index].initialColor = 'bg-[#ffffff]';
        } else if (currentColor === 'bg-[#b8c7db]') {
          newData[index].initialColor = 'bg-[#ecf0f5]';
        }
      }
  
      return newData;
    });
  };
  const filterData = () => {
    return data.filter((item) =>
      item.id.toString().includes(searchQuery) || // Filter by ID
      item.customer.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by customer name
      item.phoneNumber.includes(searchQuery) || // Filter by phone number
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by email
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by address
    );
  };  
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  

       

  
  return (
    <div>
      <AdminTopbar />
      <div className="bg-gray-200 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center border-b border-adarkgrey justify-between h-12 lg:h-20">
            <div>
              <p className="lg:text-[2rem] text-[1.1rem] font-semibold">Customers</p>
            </div>
            <div className="flex items-center mb-2 gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-5 h-5 lg:w-9 lg:h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className="bg-white w-32 md:w-full text-black lg:rounded-lg rounded-md pl-9 pr-4 py-1 lg:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-amidnight"
              />
              <div className="flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center" onClick={toggleEditMode}>
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">  {editMode ? 'Save' : 'Edit'}</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
            </div>
          </div>
          {/* Body and footer divisions */}
          <div className="py-4">
            {/* Body content */}
            <div className="overflow-x-auto border border-[#adadad] rounded-md" style={{ scrollbarWidth: 'none' }}>
              <table className="table-fixed w-[65rem] xl:w-full" >
                <thead>
                  <tr className="bg-[#ecf0f5] lg:text-[1.3rem] text-[1.1rem] border-b border-[#adadad]">
                    <th className="px-4 py-3 flex items-center gap-x-1">
                      <span className="icon-[fluent--checkmark-square-20-regular] lg:w-12 lg:h-12 w-10 h-10 text-amidnight"></span>ID
                    </th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
  {filterData().map((row, rowIndex) => (
    <tr
      key={row.id}
      className={`lg:text-[1.1rem] text-[1rem] ${
        rowIndex !== filterData().length - 1 ? 'border-b border-[#adadad]' : ''
      } ${row.initialColor}`}
    >
      <td className="px-4 py-2 flex items-center ">
        <span className="icon-[fluent--checkmark-square-20-regular] w-12 h-12 text-amidnight"></span>
        {/* Assuming row.id is the value you want to edit */}
        <CustomInputComponentid
          value={row.id}
          onChange={(newValue) => handleIdChangeid(newValue, rowIndex)}
          // Assuming you want the same styling as the surrounding text
          isReadOnly={!editMode}
        />
      </td>
      <td className="px-4 py-auto ">
        <CustomInputComponent
          value={row.customer}
          onChange={(newValue) => handleCustomerChange(newValue, rowIndex)}
          isReadOnly={!editMode}
          // Assuming you want the same styling as the surrounding text
          
        />
      </td>
      <td className="px-4 py-2 text-center">
        <CustomInputComponent
          value={row.phoneNumber}
          onChange={(newValue) => handlePhoneNumberChange(newValue, rowIndex)}
          // Assuming you want the same styling as the surrounding text
          isReadOnly={!editMode}
        />
      </td>
      <td className="px-4 py-2 text-center">
        <CustomInputComponent
          value={row.email}
          onChange={(newValue) => handleEmailChange(newValue, rowIndex)}
          // Assuming you want the same styling as the surrounding text
          isReadOnly={!editMode}
        />
      </td>
      <td className="px-4 py-2 text-center">
        <CustomInputComponent
          value={row.address}
          onChange={(newValue) => handleAddressChange(newValue, rowIndex)}
          // Assuming you want the same styling as the surrounding text
          isReadOnly={!editMode}
        />
      </td>
     <td className="px-4 py-2 text-center">
                        <ToggleSwitch  onClick={() => toggleColor(rowIndex)}/>
                      </td>
    </tr>
  ))}
</tbody>





              </table>
            </div>
          </div>
          <div className="mt-2">
            {/* Footer content */}
            
            <AdminCustomerPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
