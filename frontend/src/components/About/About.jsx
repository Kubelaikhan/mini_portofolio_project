
import React from 'react'

const About = () => {
  return (
    <section>
        <div className="container">

            
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src="src/assets/Rectangle6.png" alt="Me" />
                </div>

                 {/* =========== ABOUT CONTENT ============ */}
          
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-3'>
                <div className='box-achievement flex items-center justify-evenly'>
                            <div className="border border-1 rounded-[13px] pt-[20px] pb-[20px] pl-[20px] pr-[20px] ml-4 items-center justify-center">
                                <img src="src/assets/awards.png" alt="Awards" />
                                <p>Experience</p>
                                <p>1+experience</p>
                            </div>

                            <div className="border border-1 rounded-[13px]  pt-[20px] pb-[20px] pl-[20px] pr-[20px]  ml-4 items-center">
                                <img src="src/assets/cloud.png" alt="Clouds" />
                                <p>Completed</p>
                                <p>10+projects</p>
                            </div>

                            <div className="border border-1 rounded-[13px]  pt-[20px] pb-[20px] pl-[20px] pr-[20px] ml-4 items-center">
                                <img src="src/assets/support.png" alt="Support" />
                                <p>24 x 24</p>
                                <p>Online 24x7</p>
                            </div>
                                
                </div>

                <p className=" text_para mt-[35px] ml-[20px]"> An UI/UX designer. I create web pages UI/UX which is a user interface. I have years of experience
                            and many client are happy with my project carried out.
                </p>
                <button className="btn flex w-[250px] mt-[35px]  ml-[20px]">
                        Download file CV
                        <img className="pl-[10px]" src="src\assets\ion_document-text-outline.png" alt="" />
                </button>
                    
                </div>
       
            </div>

           
        </div>
    </section>
  )
}

export default About