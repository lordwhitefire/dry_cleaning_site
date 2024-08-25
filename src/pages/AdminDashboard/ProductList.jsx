import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';
import gameIcons from '../../assets/game-icons.png'
import bubaIcons from '../../assets/Buba.png'
import towelIcons from '../../assets/towel.png'
import undergIcons from '../../assets/underg.png'
import AdminProductPagination from '../../component/AdminProductPages';
import CustomInputComponent from '../../component/CustomInputComponent'; // Importing the custom input component
import CustomInputComponentid from '../../component/CustomInputComponentid'; // Importing the custom input component
import AddProducts from './AddProducts'; // Adjust the import based on your actual path
const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const initialData = [
    { 
      id: 12345, 
     ProductName: 'Academic/Law Gown' ,
      Categories: 'Specialty Items', 
      Price: '3000',
      Price1: '2000',
      initialColor: 'bg-[#ffffff]' ,// white color
      image:gameIcons
    },
    { 
      id: 12346, 
      ProductName: 'Agbada' ,
      Categories: 'Specialty Items', 
      Price: '2500',
      Price1: '1500',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:gameIcons
    },
    { 
      id: 12347, 
      ProductName: 'Abaya' ,
      Categories: 'Specialty Items', 
      Price: '1500',
      Price1: '1000',
      initialColor: 'bg-[#ffffff]' ,// white color
      image:gameIcons
    },
    { 
      id: 12348, 
      ProductName:'Duvet Cover' ,
      Categories: 'Home Textiles', 
      Price: '1500',
      Price1: '800',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:towelIcons
      
    },
    { 
      id: 12349, 
      ProductName: 'Bathrobe' ,
      Categories: 'Home Textiles', 
      Price: '1500',
      Price1: '1000',
      initialColor: 'bg-[#ffffff]' ,// white color
      image:towelIcons
    },
    { 
      id: 12350, 
      ProductName: 'Blanket' ,
      Categories: 'Home Textiles', 
      Price: '1000',
      Price1: '700',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:towelIcons
    },
    { 
      id: 12351, 
      ProductName: 'Blouse/Buba' ,
      Categories: 'Home Textiles', 
      Price: '1500',
      Price1: '1000',
      initialColor: 'bg-[#ffffff]', // white color
      image:towelIcons
    },
    { 
      id: 12352, 
      ProductName: 'Brassaire' ,
      Categories: 'Tops', 
      Price: '700',
      Price1: '500',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:bubaIcons
    },
    { 
      id: 12353, 
      ProductName: 'Bed Sheet', 
      Categories: 'Undergarments', 
      Price: '700',
      Price1: 'N/A',
      initialColor: 'bg-[#ffffff]', // white color
      image:undergIcons
    }
  ];
  
  // Function to handle row deletion
  const handleDeleteRow = (index) => {
    setData((prevData) => {
      // Filter out the row to be deleted
      const newData = prevData.filter((_, i) => i !== index);
      return newData;
    });
  };
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState(initialData);
  const [showAddProduct, setShowAddProduct] = useState(false);

 // Step 2: Toggle Edit Mode Function
 const toggleEditMode = () => {
  setEditMode(!editMode);
};
const handleAddProduct = (newProduct) => {
  // Generate iconUrl based on ProductName
  
  // Add the updated product to the data array
  const updatedData = [...data, newProduct];

  // Log the entire data array
  console.log("Updated Data Array:", updatedData);

  // Update the state with the new data array
  setData(updatedData);

  // Hide the Add Product component
  setShowAddProduct(false);
};



const handleInputChange = (event) => {
  setSearchQuery(event.target.value);
};
const handleToggleView = () => {
  setShowAddProduct(!showAddProduct);
};

if (showAddProduct) {
  return <AddProducts onAddProduct={handleAddProduct} onClick={handleToggleView} />;
}
const filterData = () => {
  return data.filter((item) =>
    item.id.toString().includes(searchQuery) || // Filter by ID
    item.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by customer name
    item.Categories.includes(searchQuery) || // Filter by phone number
    item.Price.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by email
    item.Price1.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by address
    
  );
};  

const svgDataURL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' color='%23000'%3E%3Cpath d='M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5M7.56 8.01c1.53-.06 2.49.03 3.09 1.08c.63 1.26 2.19 4.77 2.58 5.58c.42.87.96 1.47 3.18 1.32'/%3E%3Cpath d='M17 8c-2.2-.014-4 2.7-5 4c-1.1 1.5-2.99 4.1-4.99 4'/%3E%3C/g%3E%3C/svg%3E";


  return (
    <div>
      <AdminTopbar />
      <div className="bg-gray-200 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex flex-col w-full  py-1 justify-center border-b border-adarkgrey ">
           <div className='flex items-center justify-between w-full h-12 lg:h-20'>
           <div>
              <p className="lg:text-[2rem] text-[1.1rem] font-semibold">Products</p>
            </div>
            <div className="flex lg:w-[40rem] items-center gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-5 h-5 lg:w-9 lg:h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                className="bg-white w-32 md:w-[25rem] text-black lg:rounded-lg rounded-md pl-9 pr-4 py-1 lg:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-amidnight"
              /> 
                 <a  onClick={handleToggleView}  className="hidden lg:flex flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem] text-nowrap">Add Products</span>
                <span className="icon-[ic--baseline-plus] lg:w-7 lg:h-7 h-5 w-5"></span>
              </a>
              
              <div className="hidden lg:flex flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center" onClick={toggleEditMode}>
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">{editMode ? 'Save' : 'Edit'}</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
            </div>
           </div>
           <div className='flex items-center w-full justify-between'>
              
              <div className=" lg:hidden flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg rounded-md mb-1 text-awhite bg-amidnight items-center" onClick={toggleEditMode}>
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">{editMode ? 'Save' : 'Edit'}</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
              <a  onClick={handleToggleView} className=" lg:hidden flex  gap-x-1  w-[10rem] lg:py-3 py-1  rounded-md text-awhite bg-amidnight items-center justify-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem] text-nowrap">Add Products</span>
                <span className="icon-[ic--baseline-plus] lg:w-7 lg:h-7 h-5 w-5"></span>
              </a>
           </div>
          </div>
          {/* Body and footer divisions */}
          <div className="py-4">
            {/* Body content */}
            <div className="overflow-x-auto border border-[#adadad] rounded-md" style={{ scrollbarWidth: 'none' }}>
              <table className="table-fixed w-[65rem] xl:w-full">
                <thead>
                  <tr className="bg-[#ecf0f5] lg:text-[1.3rem] text-[1.1rem] border-b border-[#adadad]">
                    <th className="px-4 py-3 flex items-center gap-x-1">
                      <span className="icon-[fluent--checkmark-square-20-regular] lg:w-12 lg:h-12 w-10 h-10 text-amidnight"></span>ID
                    </th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Price <br /> (Launder)</th>
                    <th className="px-4 py-2">Price <br /> (Iron)</th>
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
        isReadOnly={!editMode}
      />
    </td>
    
    <td className="px-4 py-auto">
    <span className='flex items-center '> <img className='W-12 h-12 object-cover ' src={row.image} alt="" />
      <CustomInputComponent
        value={row.ProductName}
        onChange={(newValue) => handleProductNameChange(newValue, rowIndex)}
        isReadOnly={!editMode}
      />
      </span>
    </td>
    <td className="px-4 py-2 text-center">
      <CustomInputComponent
        value={row.Categories}
        onChange={(newValue) => handleCategoriesChange(newValue, rowIndex)}
        isReadOnly={!editMode}
      />
    </td>
    <td className="px-4 py-2 text-center">
      <CustomInputComponent
        value={row.Price}
        onChange={(newValue) => handlePriceChange(newValue, rowIndex)}
        isReadOnly={!editMode}
      />
    </td>
    <td className="px-4 py-2 text-center">
      <CustomInputComponent
        value={row.Price1}
        onChange={(newValue) => handlePrice1Change(newValue, rowIndex)} 
        isReadOnly={!editMode}
      />
    </td>
    {/* Move the div inside the table cell */}
    
    <td className="px-4 py-2 text-center">
                      <span className="icon-[mage--trash-3] w-12 h-12 text-[#990404]" onClick={() => handleDeleteRow(rowIndex)} ></span>
                      </td>
  </tr>
))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2">
          <div>
      <img src={svgDataURL} alt="SVG Image" />
    </div>
            {/* Footer content */}
            <AdminProductPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
