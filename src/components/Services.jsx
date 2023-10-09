import React from 'react';

import { services } from '../data';

const Services = () => {
  return (
    <div className='bg-[#e8f4fb] py-16 pb-64 mt-24'>
      <div className='w-[80%] mx-auto md:flex block items-center justify-between gap-16'>
        <div>
          <h1 className='text-[#22A2FF] lg:text-[35px] md:text-[25px] text-[25px] font-[600]'>
            Our Services
          </h1>
          <p className='text-[#606060] md:text-[15px] text-[12px] font-[400] max-w-[800px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac.
          </p>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-3 pt-11' id='services'>
          {/* Service  */}
          {services.map((item, index) => {
            return (
              <div key={index} className='bg-[#fff] flex flex-col gap-4 p-8 justify-center hover:scale-[1.1] transition-all hover:shadow-md rounded-md'>
                <span className='bg-[#22A2FF] p-5 rounded-full text-white w-fit'>{item.icon}</span>
                <h1 className='text-[15px] text-[#22A2FF] font-[600]'>{item.title}</h1>
                <p className='text-[12px]'>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
