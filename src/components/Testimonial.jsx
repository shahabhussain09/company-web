import React from 'react';
import { AiFillStar } from 'react-icons/ai'; // Import AiFillStar from react-icons/ai
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/pagination'; // Import Swiper pagination CSS
import img1 from '../assets/Ellipse.png'; // Import images
import img2 from '../assets/Ellipse 755 (1).png';
import img4 from '../assets/Ellipse.png';
import { Pagination } from 'swiper/modules'; // Import Swiper pagination module

const Testimonial = () => {
  return (
    <>
      <div className=' w-[80%] mx-auto gap-3  flex flex-col items-center justify-center pt-32' id='testimonial'>
            <h1 className='text-[#5ABAFF] w-fit lg:text-[50px] md:text-[40px] text-[30px] font-[600] '>Testimonials</h1>
            <p className=' text-[20] font-normal'>"Discover What Our Clients Are Saying – Real Stories, Real Satisfaction</p>
        </div>
    <Swiper
     breakpoints={{
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
     }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-[80%] mx-auto mt-32"
    >
      
      <SwiperSlide className=' bg-[#fff] shadow-md py-10 px-5'>
        <div className=' flex flex-col gap-4 max-w-[455px]'>
            <div className=' flex gap-16'>
                <div>
                  <img src={img1} alt="" />
                </div>
                <div className=' flex flex-col gap-2'>
                  <h1 className=' text-[13px]'>andrew tait</h1>
                  <p className='text-[14px] font-semibold'>Client from Uganda</p>
                  <div className=' flex gap-1 text-[18px] text-yellow-400'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                  </div>
                </div>
            </div>
            <div>
                <p className=' text-[12px]'>Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-[#fff] shadow-md py-10 px-5'>
        <div className=' flex flex-col gap-4 max-w-[455px]'>
            <div className=' flex gap-16'>
                <div>
                  <img src={img2} alt="" />
                </div>
                <div className=' flex flex-col gap-2'>
                <h1 className=' text-[13px]'>andrew tait</h1>
                  <p className='text-[14px] font-semibold'>Client from Uganda</p>

                  <div className=' flex gap-1 text-[18px] text-yellow-400'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                  </div>
                </div>
            </div>
            <div>
                <p className=' text-[12px]'>Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-[#fff] shadow-md py-10 px-5'>
        <div className=' flex flex-col gap-4 max-w-[455px]'>
            <div className=' flex gap-16'>
                <div>
                  <img src={img2} alt="" />
                </div>
                <div className=' flex flex-col gap-2'>
                <h1 className=' text-[13px]'>andrew tait</h1>
                  <p className='text-[14px] font-semibold'>Client from Uganda</p>

                  <div className=' flex gap-1 text-[18px] text-yellow-400'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                  </div>
                </div>
            </div>
            <div>
                <p className=' text-[12px]'>Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className=' bg-[#fff] shadow-md py-10 px-5'>
        <div className=' flex flex-col gap-4 max-w-[455px]'>
            <div className=' flex gap-16'>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div className=' flex flex-col gap-2'>
                <h1 className=' text-[13px]'>andrew tait</h1>
                  <p className='text-[14px] font-semibold'>Client from Uganda</p>

                  <div className=' flex gap-1 text-[18px] text-yellow-400'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                  </div>
                </div>
            </div>
            <div>
                <p className=' text-[12px]'>Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=' bg-[#fff] shadow-md py-10 px-5'>
        <div className=' flex flex-col gap-4 max-w-[455px]'>
            <div className=' flex gap-16'>
                <div>
                  <img src={img2} alt="" />
                </div>
                <div className=' flex flex-col gap-2'>
                <h1 className=' text-[13px]'>andrew tait</h1>
                  <p className='text-[14px] font-semibold'>Client from Uganda</p>

                  <div className=' flex gap-1 text-[18px] text-yellow-400'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                  </div>
                </div>
            </div>
            <div>
                <p className=' text-[12px]'>Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.ention promotion. Hill sold ham men made lose case. men made lose case. Views</p>
            </div>
        </div>
      </SwiperSlide>

    </Swiper>
  </>
  )
}

export default Testimonial