import React from 'react'
import logo from '../assets/Vector.png'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='  md:flex block md:text-left text-center items-center py-20 justify-around  mt-12 bg-[#0070C0]'>
      <div className='pt-32 flex justify-center'>
        <img src={logo} alt="" />
      </div>
       <div className=' md:flex block items-center justify-between gap-16 pt-32'>
       <div className=' text-white flex flex-col gap-1'>
          <h1 className='text-[22px] font-semibold'>Site Map</h1>
          <h2>home</h2>
          <h2>services</h2>
          <h2>portfolio</h2>
        </div>
        <div className=' text-white flex flex-col gap-1'>
          <h1 className=' text-[22px] font-semibold '>Head Office</h1>
          <h2>Office # 09,2nd Floor Ali </h2>
          <h2>Tower,Main University Road </h2>
          <h2>Peshawar</h2>
        </div>
        <div className=' text-white flex flex-col gap-1'>
        <h1 className='text-[22px] font-semibold'>Social Links</h1>
          <h2 className=' flex items-center md:justify-start justify-center gap-3'><span><BsFacebook /></span>FaceBook</h2>
          <h2 className=' flex items-center gap-3 md:justify-start justify-center'><span><BsTwitter /></span>Twitter</h2>
          <h2 className=' flex items-center gap-3 md:justify-start justify-center'><span><BsInstagram /></span>Instagram</h2>
        </div>
       </div>
    </div>
    <div className='  bg-[#0070C0] '>
      <p className=' flex justify-center pb-2 text-white border-t-[1px] border-[#fff] w-[80%] mx-auto'>Copyright © 2023 - All rights reserved</p>
    </div>
    </>
  )
}

export default Footer