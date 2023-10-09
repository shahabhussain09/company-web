import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Data } from '../data';
import { motion } from 'framer-motion'; // Import Framer Motion

const Portfolio = () => {
  const [element, setElement] = useState(6);
  const slice = Data.CardData.slice(0, element);

  const loadMore = () => {
    setElement(element + element);
  };

  return (
    <motion.div // Wrap the entire component in a motion.div
      initial={{ scale: 0.8 }} // Initial scale when the component mounts
      animate={{ scale: 1 }} // Animation when the component is in view
      exit={{ scale: 0.8 }} // Exit scale when the component is removed
      transition={{ duration: 0.5 }}
      className='w-[80%] mx-auto'
    >
      <div className='flex flex-col justify-center items-center p-12'>
        <h1 className='text-[#22A2FF] text-[45px] font-semibold'>Portfolio</h1>
        <p className='md:text-[17px] text-[12px] font-normal max-w-[622px] text-center'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-12' id='portfolio'>
        {slice.map((item, index) => {
          return (
            <motion.div // Wrap each card in a motion.div
              key={index}
              className='bg-white hover:shadow-xl transition-all flex flex-col p-0 justify-center items-start rounded-xl gap-[32px]'
              whileHover={{ scale: 1.1 }} // Framer Motion for scale effect on hover
            >
              <div>
                <img src={item.img} alt='' />
              </div>
              <div className='m-2 flex flex-col '>
                <p className='font-[500] text-[14px]'>{item.desc}</p>
                <h1 className='text-[22px] font-[600]'>{item.title}</h1>
              </div>
              <button className='flex m-1 p-4 gap-2 items-center border-[2px] border-[#22A2FF] text-[#22A2FF]'>
                Case Study <span><AiOutlineArrowRight /></span>
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className='flex justify-center items-center'>
        <motion.button
          onClick={() => loadMore()}
          className='bg-[#22A2FF] text-[16px] font-semibold text-white py-4 px-6 rounded mt-[122px]'
          whileHover={{ scale: 1.1 }} // Framer Motion for scale effect on hover for the "Show More" button
        >
          Show More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Portfolio;
