
import React from 'react'
import AdminTopbar from '../../component/AdminTopbar';
import PieChart from '../../component/PieChart';
import Graph from '../../component/Graph'
const AdminDashboard = () => {

  const data = [
    {
      iconClassName: "icon-[mdi--user]",
      bgColorClassName: "bg-[#3938ff]",
      total: 0,
      description: "Total number of",
      description2: "users"
    },
    {
      iconClassName: "icon-[solar--wallet-money-broken]",
      bgColorClassName: "bg-[#fdc106]",
      total: 0,
      description: "Total amount of" ,
      description2: "money earned"
    },
    {
      iconClassName: "icon-[material-symbols--shopping-cart-outline]",  
      bgColorClassName: "bg-[#0100bb]",
      total: 0,
      description: "Total number of " ,
      description2: "orders"
    },
    {
      iconClassName: "icon-[solar--bag-check-broken]",  
      bgColorClassName: "bg-[#28a745]",
      total: 0,
      description: "Total number of " ,
      description2: " completed orders"
    },
    {
      iconClassName: "icon-[iconoir--timer]",  
      bgColorClassName: "bg-[#ff5d01]",
      total: 0,
      description: "Total number of " ,
      description2: " pending orders"
    },
    {
      iconClassName: "icon-[mingcute--sandglass-fill]",  
      bgColorClassName: "bg-[#f91f1f]",
      total: 0,
      description: "Total number of " ,
      description2: " undelivered orders"
    },
    {
      iconClassName: "icon-[material-symbols--cancel]",  
      bgColorClassName: "bg-[#c20505]",
      total: 0,
      description: "Total number of " ,
      description2: " cancelled orders"
    },
    // Add more objects for additional divs as needed <span class=></span>
  ];
   
 // Set default width and height
 let width = 500;
 let height = 400;

 // Check screen size and update width and height accordingly
 if (window.innerWidth <= 768) { // Check if screen width is less than or equal to 768px (considering as phone screen)
   width = 300;
   height = 200;
 }

  const deliveredPercent = 65; // Example percentage of delivered orders


  return (
    <div>
      <AdminTopbar />
      <div>
      <div className="grid xl:max-w-[65rem]  w-full mt-3 mb-6  lg:ml-[1rem] lg:grid-cols-2 xl:grid-cols-3  grid-cols-1  gap-x-2 justify-center">
      {data.map((item, index) => (
        <div key={index} className="bg-alight m-[1rem] rounded-md px-[2rem] py-4 flex items-center lg:w-[21rem] w-[21rem] gap-x-4 shadow-xl">
          <div className={`h-[6rem] w-[6rem] flex items-center justify-center rounded-full ${item.bgColorClassName}`}>
            <span className={item.iconClassName + " text-awhite h-12 w-12 "}></span>
          </div>
          <div>
            <p className="text-[4rem]">{item.total}</p>
            <p className="relative text-[1rem] -top-[1.5rem]">{item.description}</p>
            <p className="relative text-[1rem] -top-[1.5rem]">{item.description2}</p>
          </div>
        </div>
      ))}
    </div>
  <div className='flex flex-col mx-4 xl:mx-0 xl:flex-row justify-center gap-y-8 xl:gap-x-4 xl:w-[65rem] w-[33rem] '>
  <div className=' bg-[#ecf0f5] rounded-md lg:w-[35rem] w-[22rem] py-8 px-[2rem] '> <Graph width={width} height={height} /></div>
 <div className='flex flex-col gap-y-4'>
 <div className="container w-[21.5rem] lg:w-[24rem] py-6  lg:h-[23rem] h-[21rem] rounded-md flex gap-y-4 flex-col justify-center items-center bg-[#ecf0f5]">
      <h1 className="text-2xl font-bold">Weekly Orders (%)</h1>
      <PieChart deliveredPercent={deliveredPercent} />
      <div className="flex justify-between w-[18rem] ">
        <div className="flex items-center mr-8">
          <div className="w-4 h-4 bg-[#6261ff] mr-2"></div>
          <span>Delivered</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-awhite border  mr-2"></div>
          <span>Undelivered</span>
        </div>
      </div>
    </div>
    <div className='bg-[#ecf0f5] w-[21.5rem] lg:w-[24rem] px-3 py-4'>
      <div className='flex gap-x-4 items-center '>
    <div className='bg-[#ffffff] flex justify-center items-center w-10 h-10 rounded-full '> <span class="icon-[mage--notification-bell] w-8 h-8 text-[#6261ff]  "></span> </div>
      <div className='text-[#505053] Nunito-fonts'>
        <p className='text-[2rem]'>Notification</p>
        <p className='text-[1.1rem]'>New user registered</p>
      </div>
      </div>
      <div className='w-[7rem] ml-10 bg-[#6261ff] py-[0.4rem] mt-2  rounded-3xl flex justify-center items-center'>
       <p className='text-[1.1rem] text-[#fefefe] Nunito-fonts'>See user</p>
      </div>
    </div>
 </div>
  </div>
      </div>
    </div>
  )
}

export default AdminDashboard
