import React from 'react';

import person1Image from '../assets/person1.jpg';
import person2Image from '../assets/person2.jpg';
import person3Image from '../assets/person3.jpg';


const testimonies = [
    {
      id: 1,
      img: person1Image,
      name: 'Ashley Janelle',
      location: 'Sydney, USA',
      text: '"With two young kids, laundry is a constant battle. RapidClean has been a game-changer!  Their service is so convenient, and I love being able to track my clothes while the kids are playing.  Its one less thing for me to worry about, and the clothes always come back stain-free!"',
    },
    {
      id: 2,
      img: person2Image,
      name: 'Mike Zenith',
      location: 'Sydney, New York',
      text: ' RapidClean is a lifesaver!  As a working professional, I never have time for laundry.  Their convenient scheduling and real-time tracking allow me to get my clothes cleaned without any hassle.  Plus, the quality of service is amazing my clothes always come back looking fresh and crisp." ',
    },
    {
      id: 3,
      img: person3Image,
      name: 'Mike Zenith',
      location: 'Sydney, Australia',
      text: 'RapidClean is a lifesaver!  As a working professional, I never have time for laundry.  Their convenient scheduling and real-time tracking allow me to get my clothes cleaned without any hassle.  Plus, the quality of service is amazing - my clothes a',
    },
    
];

const Testimonial1 = () => {
 

    return (
        <div className='bg-[#ECF0F5] my-[3rem]'>
            <div className=' flex items-center flex-col pt-[3rem] pb-[3rem] lg:pb-[7rem]'>
                <h1 className='text-[2rem] lg:w-full pt-[3rem] text-amidnight ml-[2rem] lg:pl-[7rem] lg:ml-0 mb-[2rem] font-semibold  '>
                    Our Voices of Satisfaction
                </h1>
               <div className='lg:w-full lg:pl-[4rem] lg:h-[24rem] h-[34rem]  overflow-scroll' style={{ scrollbarWidth: 'none' }}>
                 <div  className="grid   lg:w-[82rem] grid-cols-1 lg:grid-cols-3 gap-x-6">
                    {testimonies.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            
                            className={`bg-[#ebebeb] lg:w-[26rem] w-[20rem] mx-[2rem] shadow-2xl hover:text-awhite gap-x-4 flex flex-col items-center justify-center rounded-xl px-[1.5rem] py-[3rem] mb-8 sm:mb-0 hover:bg-[#6261ff] bg-gray-800 ${index === 1 ? 'center' : ''}`}
                        >
                          
                            <div className='mb-8 '>
                        <p className="  h-auto text-[1rem] text-justify">{testimonial.text}</p>
                            </div>
                            <div className='flex lg:w-[20rem] w-[18rem] justify-between items-center'>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-md text-white font-medium ">{testimonial.name}</h3>
                            
                                </div>
                            </div>
                            <div className='flex '>
                                <span className="bg-gradient-to-t from-[#fff650] to-[#ffab17] icon-[ic--sharp-star] w-5 h-5  "></span>
                                <span className="bg-gradient-to-t from-[#fff650] to-[#ffab17] icon-[ic--sharp-star] w-5 h-5  "></span>
                                <span className="bg-gradient-to-t from-[#fff650] to-[#ffab17] icon-[ic--sharp-star] w-5 h-5 "></span>
                                <span className="bg-gradient-to-t from-[#fff650] to-[#ffab17] icon-[ic--sharp-star] w-5 h-5 "></span>
                                <span className="bg-gradient-to-t from-[#fff650] to-[#ffab17] icon-[ic--sharp-star] w-5 h-5 "></span>
                            </div>
                            </div>
                        </div>

                    ))}
                </div></div>
                  <div className='w-full flex justify-center mt-[4rem]'>   <button className={`hidden lg:flex md:flex text-awhite bg-[#6261ff] hover:text-[#6261ff] hover:border hover:border-[#6261ff] hover:bg-alight hover:text-[#6261ff] px-14 py-2 rounded-md  text-lg font-medium `}>
                Read more Reviews
              </button></div>
                <div>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonial1;
