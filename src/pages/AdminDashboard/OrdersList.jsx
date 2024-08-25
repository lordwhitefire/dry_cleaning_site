import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';
import AdminOrderPagination from '../../component/AdminOrderPages';
import CustomInputComponent from '../../component/CustomInputComponent'; // Importing the custom input component
import CustomInputComponentid from '../../component/CustomInputComponentid'; // Importing the custom input component

const OrdersList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const initialData = [
    { 
      id: 12345, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Delivered',
      Color:'text-[#28a745]',
      bgColor:'bg-[#28a745]/[0.4]'
    },
    { 
      id: 12346, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Delivered',
      Color:'text-[#28a745]',
      bgColor:'bg-[#28a745]/[0.4]'
    },
    { 
      id: 12347, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Delivered',
      Color:'text-[#28a745]',
      bgColor:'bg-[#28a745]/[0.4]'
    },
    // Repeat the pattern for the remaining entries
    { 
      id: 12348, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Pending',
      Color:'text-[#ff5d01]',
      bgColor:'bg-[#ff5d01]/[0.4]'
    },
    { 
      id: 12349, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Pending',
      Color:'text-[#ff5d01]',
      bgColor:'bg-[#ff5d01]/[0.4]'
    },
    { 
      id: 12350, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Undelivered',
      Color:'text-[#f91f1f]',
      bgColor:'bg-[#990404]/[0.4]'
    },
    { 
      id: 12351, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color  
      text:'Undelivered',
      Color:'text-[#f91f1f]',
      bgColor:'bg-[#990404]/[0.4]'
    },
    { 
      id: 12352, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Cancelled',
      Color:'text-[#990404]',
      bgColor:'bg-[#990404]/[0.4]'
    },
    { 
      id: 12353, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Cancelled',
      Color:'text-[#990404]',
      bgColor:'bg-[#990404]/[0.4]'
    }
  ];
  
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState(initialData);

 // Step 2: Toggle Edit Mode Function
 const toggleEditMode = () => {
  setEditMode(!editMode);
};
const filterData = () => {
  return data.filter((item) =>
    item.id.toString().includes(searchQuery) || // Filter by ID
    item.Customer.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by customer name
    item.OrderDate.toLowerCase().includes(searchQuery.toLowerCase()) || //filter by order date 
    item.DeliveryDate.includes(searchQuery) || // Filter by phone number
    item.Amount.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by email
    item.text.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by address
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
              <p className="lg:text-[2rem] text-[1.1rem]  font-semibold">Orders</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-5 h-5 lg:w-9 lg:h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                className="bg-white w-32 md:w-full text-black lg:rounded-lg rounded-md  pl-9 pr-4 py-1 lg:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-amidnight"
              />
              <div className="flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center" onClick={toggleEditMode}>
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">{editMode ? 'Save' : 'Edit'}</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
            </div>
          </div>
          {/* Body and footer divisions */}
          <div className="py-4">
            {/* Body content */}
            <div className="overflow-x-auto border border-[#adadad] rounded-md" style={{ scrollbarWidth: 'none' }}>
              <table className="table-fixed w-[65rem] xl:w-full ">
                <thead>
                  <tr className="bg-[#ecf0f5] tlg:text-[1.3rem] text-[1.1rem] border-b border-[#adadad]">
                    <th className="px-4 py-3 flex items-center gap-x-1">
                      <span className="icon-[fluent--checkmark-square-20-regular] lg:w-12 lg:h-12 w-10 h-10 text-amidnight"></span> Order ID
                    </th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Order Date</th>
                    <th className="px-4 py-2">Delivery Date<br /> (Launder)</th>
                    <th className="px-4 py-2">Amount <br /> (Iron)</th>
                    <th className="px-4 py-2">Status</th>
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
        isReadOnly={!editMode}
      />
    </td>
    <td className="px-4 py-auto">
      <CustomInputComponent
        value={row.Customer}
        onChange={(newValue) => handleCustomerChange(newValue, rowIndex)}
        isReadOnly={!editMode}
      />
    </td>
    <td className="px-4 py-2 text-center">
      <CustomInputComponent
        value={row.OrderDate}
        onChange={(newValue) => handleOrderDateChange(newValue, rowIndex)}
        isReadOnly={!editMode}
      />
    </td>
    <td className="px-4 py-2 text-center">
      <CustomInputComponent
        value={row.DeliveryDate}
        onChange={(newValue) => handleDeliveryDateChange(newValue, rowIndex)}
        isReadOnly={!editMode}
      />
    </td>
    <td className="px-4 py-2 text-center">
      <CustomInputComponent
        value={row.Amount}
        onChange={(newValue) => handleAmountChange(newValue, rowIndex)} 
        isReadOnly={!editMode}
      />
    </td>
    {/* Move the div inside the table cell */}
    
    <div className={`text-[1.1rem] w-[10rem] mx-auto h-[3rem] mb-4 flex rounded-md  items-center justify-center ${row.Color} ${row.bgColor} `}>
                           {row.text}
                        </div>
  </tr>
))}

                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2">
            {/* Footer content */}
            
            <AdminOrderPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
