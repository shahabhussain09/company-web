import React from 'react'; // Import React
import creat from '../assets/Rectangle 30.png'; // Import an image

const Creative = () => {
  return (
    <div className='w-[80%] mx-auto relative bottom-44'>
      <div className='bg-[#fff] shadow-md rounded-xl md:p-11 p-7 md:flex block items-center justify-between '>
        <div className='flex-1'>
          <img src={creat} alt="" /> {/* Display the imported image */}
        </div>
        <div className='flex-1 flex flex-col gap-5 pt-5 md:px-14'>
          <p className='md:text-[18px] text-[12px] font-[600]'>WHAT WE DO</p>
          <h1 className='text-[#22A2FF] lg:text-[35px] md:text-[25px] text-[18px] font-[600]'>Creative, bespoke design projects</h1>
          <h2 className='md:text-[18px] text-[12px] font-[400]'>
            Tell us your vision for your ideal app, website, or system design. We'll partner with you to make it a reality. We'll get to know you and your business, understand exactly what makes you unique, and deliver a final product that embodies your brand even better than you imagined.
          </h2>
          <button className='bg-[#22A2FF] text-[12px] text-white py-2 px-4 rounded-md w-fit'>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Creative;
