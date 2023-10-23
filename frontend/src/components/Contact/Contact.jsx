import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className="container">

            
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className='flex flex-col w-1/2 lg:w-1/2 xl:w-[570px] z-10 order-2 lg:order-1 items-center justify-center'>
                   
                        <p className="font-[800] mb-[20px]">Talk To Me</p>

                        <div className="flex flex-col items-center justify-center border-2 rounded-[12px] w-[250px] mb-[20px] pt-[30px] pb-[30px] pl-[20px] pr-[20px]">
                            <img src="src/assets/email.png" alt="Email" />
                            Email
                            <p className='text-[12px] mt-2 text-textColor'>user@gmail.com</p>
                            <div className='box-services'>
                                <p>view more</p>
                                <img src="src\assets\scroll_kekanan.png" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded-[12px] w-[250px] mb-[20px] pt-[30px] pb-[30px] pl-[20px] pr-[20px]">
                            <img src="src/assets/whatsapp.png" alt="Whatsapp" />
                            Whatsapp
                            <p className='text-[12px] mt-2 text-textColor'>+91 12356897</p>
                            <div className='box-services'>
                                <p>view more</p>
                                <img src="src\assets\scroll_kekanan.png" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 rounded-[12px] w-[250px] mb-[20px] pt-[30px] pb-[30px] pl-[20px] pr-[20px]">
                            <img src="src/assets/mesengger.png" alt="Mesengger" />
                            Mesengger
                            <p className='text-[12px] mt-2 text-textColor'>user.fb123</p>
                            <div className='box-services'>
                                <p>view more</p>
                                <img src="src\assets\scroll_kekanan.png" alt="" />
                            </div>
                        </div>

                    
                </div>

                {/* =========== ABOUT CONTENT ============ */}
        
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-3'>
                    <div className='contact-him'>
                        <p className="font-[800] mb-[20px]">Write Me Your Project</p>

                        <input type="text" placeholder='Insert Your Name' />
                        <input type="text" placeholder='Insert Your Email' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write Your Project'></textarea>

                        <button> 
                            Send Message 
                            <img src="src/assets/prime_send.png" alt="" />
                        </button>
                    </div>
                </div>
    
            </div>

        
        </div>
    </section>
  )
}

export default Contact