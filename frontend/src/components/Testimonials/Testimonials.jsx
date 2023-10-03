

//impor useState
import React, { useState } from 'react';

// import Swiper JS
import {  Pagination } from 'swiper/modules';

//import photo
import larry from "/src/assets/person/larry.png";
import brian from "/src/assets/person/brian.png";
import harriet from "/src/assets/person/harriet.png";
import arina from "/src/assets/person/arina.png";

// import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import {HiStar} from 'react-icons/hi'

const Testimonials = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules = {[Pagination]}
      spaceBetween={10} slidesPerView={1}
      pagination={{ clickable:true }}
      breakpoints={{ 
        640:{
          slidesPerView:1,
          spaceBetween:0,
        },
        768:{
          slidesPerView:2,
          spaceBetween:20
        },
        1024:{
          slidesPerView:3,
          spaceBetween:30
        }
       }}>

        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>
                <img src={arina} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                <h4 className='text-[18px] leading-[30px] font-semibold'>Arina</h4>
                <p>Florist</p>
                <p className={`comment text-[11px] ${isExpanded ? 'expanded' : ''}`}>As a florist, a captivating online presence is crucial to showcase our floral 
                creations and attract customers. Working with Alex, our web designer, has been a blooming success for our 
                floristry business.</p>
                {isExpanded || (
                    <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                      ... Read More
                    </button>
                  )}
              </div>
              <div className='flex'>
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-grayColor' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>
                <img src={brian} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                <h4 className='text-[18px] leading-[30px] font-semibold'>Brian</h4>
                <p>Content Creator</p>
                <p className={`comment text-[11px] ${isExpanded ? 'expanded' : ''}`}>As a content creator, my website is the cornerstone of my online presence, 
                and working with Alex, the web designer, was a game-changer. 
                Alex's talent for design and functionality elevated my website to a whole new level.</p>
                {isExpanded || (
                    <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                      ... Read More
                    </button>
                  )}
              </div>
              <div className='flex'>
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-grayColor' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>
                <img src={larry} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                <h4 className='text-[18px] leading-[30px] font-semibold'>Larry</h4>
                <p>Farmer</p>
                <p className= {`comment text-[11px] ${isExpanded ? 'expanded' : ''}`}>As a farmer, having a strong online presence is essential for showcasing our products and 
                  connecting with customers. Working with Alex, our web designer, has been a game-changer 
                  for our farm's digital presence.</p>
                  {isExpanded || (
                    <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                      ... Read More
                    </button>
                  )}
              </div>
              <div className='flex'>
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-grayColor' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>
                <img src={harriet} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                <h4 className='text-[18px] leading-[30px] font-semibold'>Harriet</h4>
                <p>Food Blogger</p>
                <p className={`comment text-[11px] ${isExpanded ? 'expanded' : ''}`} >I recently collaborated with Alex, a web designer, and the experience was outstanding. 
                  Alex's creative design skills and attention to detail transformed my website into a visual 
                  masterpiece. The site now offers a smooth user experience, loads quickly, and looks fantastic 
                  on all devices. I highly recommend Alex for anyone seeking top-notch web design.</p>
                  {isExpanded || (
                    <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                      ... Read More
                    </button>
                  )}
              </div>
              <div className='flex'>
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-yellowColor' />
                <HiStar className='text-grayColor' />
              </div>
            </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials