import React from 'react'; // Import React

const Contact = () => {
  return (
    <div className=' w-[80%] mx-auto relative top-56  flex flex-col items-center justify-center' id='contact'>
        <h1 className=' text-[#22A2FF] text-[41px] font-[600]'>Contact Us</h1>
            <form className=' md:p-16 p-7 flex gap-5 pt-4 flex-col'>
                <input className=' border-[2px] border-[#D3D3D3] py-3 rounded-md md:px-20 px-8 ' type="name" placeholder='Enter Your Name' />
                <input className=' border-[2px] border-[#D3D3D3] py-3 rounded-md md:px-20 px-8 ' type="email" placeholder='Enter Your Email' />
                <textarea className='border-[2px] border-[#D3D3D3] py-3 rounded-md md:px-20 px-8' name="" id=""  rows="7" placeholder='Message'></textarea>
                <button className='bg-[#5ABAFF] w-fit text-white py-4 px-6 rounded-md mt-5'>Submit Now</button>           
            </form>
    </div>
  );
};

export default Contact;
