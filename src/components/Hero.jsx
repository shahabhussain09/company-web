import React from 'react';
import hero from '../assets/Frame 1000002626.png'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
  <div className='md:w-[80%] h-screen w-[90%] mx-auto back' id='home'>
  <div className=' md:flex block items-center h-screen justify-between'>
    {/* text */}
  <motion.div
   animate={{ opacity: 1,  }}
   transition={{
       duration: 2,
       delay: 0.2,
       ease: [0.5, 0.71, 1, 1.5],
   }}
   initial={{  opacity: 0, }}
  className='flex-1 flex flex-col gap-5 pt-32'>
<h1 className=' lg:text-[45px] md:text-[37px] text-[25px] font-[700] text-[#22A2FF]'>Apptex Software Solution</h1>
<h2 className='lg:text-[35px] md:text-[25px] text-[19px] font-[500] text-black'>Your idea is our passion</h2>
<p className='md:text-[15px] text-[10px] font-[400] text-black max-w-[533px]'>we are driven by one thing the excitement on our clients face. when they see their vision brought to life.</p>
<button className='py-2 px-4 bg-[#30A8FF] w-fit text-[15px] text-white font-medium rounded'>Get in  touch</button>
    </motion.div>
    {/* text */}
    
    {/* image */}
    <motion.div
    className=' max-w-[422px]'
     animate={{ opacity: 1,  }}
     transition={{
         duration: 2,
         delay: 0.2,
         ease: [0.5, 0.71, 1, 1.5],
     }}
     initial={{  opacity: 0, }}
 >
      <img  src={hero} alt="" />
    </motion.div>
    {/* image */}
  </div>
   </div>
  );
};

export default Hero;
