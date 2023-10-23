

//impor useState
// import React, { useState } from 'react';

import React from 'react';

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

  // const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='w-[100%] mt-[30px] lg:mt-[55px]'>
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

                <div className='flex'>
                  <img src={arina} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                  <div className='flex flex-col ml-[10px]'>
                    <h4 className='text-[18px] leading-[30px] font-semibold'>Arina</h4>
                    <p className='text-[12px] font-[800]'>Florist</p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='vertical-comment mr-3'></div>
                  <div className='flex flex-col items-start'>
                    <p className={`comment text-[11px]`}>As a florist, a captivating online presence is crucial to showcase our floral 
                    creations and attract customers. Working with Alex, our web designer, has been a blooming success for our 
                    floristry business.</p>
                    {/* {isExpanded || (
                        <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                          ... Read More
                        </button>
                      )} */}
                  </div>
                </div>
               
                
               
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>
                <div className='flex'>
                  <img src={brian} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                  <div className='flex flex-col ml-[10px]'>
                    <h4 className='text-[18px] leading-[30px] font-semibold'>Brian</h4>
                    <p className='text-[12px] font-[800]'>Content Creator</p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='vertical-comment mr-3'></div>
                  <div className='flex flex-col items-start'>
                    <p className={`comment text-[11px]`}>As a content creator, my website is the cornerstone of my online presence, 
                    and working with Alex, the web designer, was a game-changer. 
                    Alex's talent for design and functionality elevated my website to a whole new level.</p>
                    {/* {isExpanded || (
                        <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                          ... Read More
                        </button>
                      )} */}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>
                <div className='flex'>
                  <img src={larry} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                  <div className='flex flex-col ml-[10px]'>
                    <h4 className='text-[18px] leading-[30px] font-semibold'>Larry</h4>
                    <p className='text-[12px] font-[800]'>Farmer</p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='vertical-comment mr-3'></div>
                  <div className='flex flex-col items-start'>
                    <p className= {`comment text-[11px]`}>As a farmer, having a strong online presence is essential for showcasing our products and 
                    connecting with customers. Working with Alex, our web designer, has been a game-changer 
                    for our farm's digital presence.</p>
                    {/* {isExpanded || (
                      <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                        ... Read More
                      </button>
                    )} */}
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 border-2 rounded-[20px] custom-shadow hover:shadow-xl transition duration-300 ease-in-out"> 
            <div className='flex flex-col items-center gap-[12px]'>
              <div>

                <div className='flex'>
                  <img src={harriet} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                  <div className='flex flex-col ml-[10px]'>
                    <h4 className='text-[18px] leading-[30px] font-semibold'>Harryet</h4>
                    <p className='text-[12px] font-[800]'>Food Blogger</p>
                  </div>
                </div>
                
              
                <div className='flex'>
                  <div className='vertical-comment mr-3'></div>
                  <div className='flex flex-col items-start'>
                    <p className={`comment text-[11px] `} >I recently collaborated with Alex, a web designer, and the experience was outstanding. 
                      His skills and attention to detail transformed my website into a visual 
                      masterpiece. I highly recommend Alex for anyone seeking top-notch web design.</p>
                      {/* {isExpanded || (
                        <button onClick={() => setIsExpanded(true)} className="read-more text-[11px]">
                          ... Read More
                        </button>
                      )} */}
                  </div>
                  
                </div>
                
              </div>

            </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials