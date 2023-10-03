import React, { useEffect, useState } from 'react';
// import { fetchDataFromMongoDB } from '../api/mongoApi'; // Sesuaikan dengan lokasi yang sesuai dengan struktur proyek Anda
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';
import Qualification from '../components/Qualification/Qualification';
import Testimonials from '../components/Testimonials/Testimonials';


const Home = () => {

    return (<>

    {/* ============ SECTION HERO ============ */}
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90-x] items-center justify-between">
                {/* CONTENT */}
                <div>
                    <div className="lg:w-[570px]">
                        <h1 className="text-[36px] leading-[46px] font-[800] md:text-[60px] md:leading-[70px]">
                            Krish<span>4lex</span>
                        </h1>
                        <h3 className="text-[19px]">_________ User Interface Designer</h3>
                        <p className="text_para"> I am UI/UX designer right now, 
                            and I am very passionate and dedicated to my work.</p>
                        <button className="btn">Say Hello!  <img className="pl-2" src="src/assets/prime_send.png" alt="" /></button>

                        
                    </div>
                </div>

                <div className="flex gap-[30px] justify-end pt-3">
                    <div>
                        <img className="pt-[60px]" src="src/assets/Alex.png" alt="Alex" />
                    </div>
                </div>
            
            </div>
        </div>
    
    </section>
    {/* ============ SECTION HERO END ============ */}



    {/* ============ SECTION ABOUT ME ============ */}
    <div className="lg:w-[460px] mx-auto">
        <h2 className="heading text-center">
            About Me
        </h2>
        <p className=" text_para text-center">My Introduction</p>
    </div>
    <About />
    {/* ============ SECTION ABOUT ME END ============ */}


    {/* ============ SECTION SKILLS ============ */}
    <div className="lg:w-[460px] mx-auto">
        <h2 className="heading text-center">
                    Skills
        </h2>
        <p className=" text_para text-center">My Technical Level</p>
    </div>
    <Skills />
    {/* ============ SECTION END SKILLS ============ */}



    {/* ============ SECTION SERVICES ============ */}
    <section>
        <div className="container">
            <div className="lg:w-[460px] mx-auto">
                <h2 className="heading text-center">
                    Services
                </h2>
                <p className=" text_para text-center">What I Offer.</p>
            </div>

            <div className="flex flex-column items-center justify-evenly">
                <div className='box ml-[20px]'>
                    <img src="src\assets\ri_layout-2-line.png" alt="Web Designer" />
                    Web Designer
                    <div className='box-services'>
                        <p>view more</p>
                        <img src="src\assets\scroll_kekanan.png" alt="" />
                    </div>
                </div>


                <div className='box ml-[20px]'>
                    <img src="src\assets\material-symbols_code.png" alt="UI/UX Designer" />
                    UI/UX Designer
                    <div className='box-services'>
                        <p>view more</p>
                        <img src="src\assets\scroll_kekanan.png" alt="" />
                    </div>
                </div>

                <div className='box ml-[20px]'>
                    <img src="src\assets\material-symbols_rebase-edit.png" alt="Branding Designer" />
                    Branding Designer
                    <div className='box-services'>
                        <p>view more</p>
                        <img src="src\assets\scroll_kekanan.png" alt="" />
                    </div>
                </div>

            </div>

        </div>
    </section>
    {/* ============ SECTION END SERVICES ============ */}


    {/* ============ SECTION QUALIFICATIONS ============ */}
    <section>
        <div className="container">
            <div className="lg:w-[460px] mx-auto">
                <h2 className="heading text-center">
                    Qualifications
                </h2>
                <p className=" text_para text-center">My Personal Journey</p>
            </div>
            
            <Qualification />
        </div>
    </section>

   
    {/* ============ SECTION END QUALIFICATIONS ============ */}



    {/* ============ SECTION TESTIMONIALS ============ */}
    <section>
        <div className="container">
            <div className="lg:w-[460px] mx-auto">
                <h2 className="heading text-center">
                    Testimonials
                </h2>
                <p className=" text_para text-center">My Clients</p>
            </div>

            <Testimonials />
        </div>
    </section>

 
    {/* ============ SECTION END TESTIMONIALS ============ */}



    {/* ============ SECTION CONTACT ME ============ */}

    <div className="lg:w-[460px] mx-auto">
        <h2 className="heading text-center">
            Contact Me
        </h2>
        <p className=" text_para text-center">Get in Touch</p>
    </div>

    <Contact />
    {/* ============ SECTION CONTACT ME ============ */}
    
    </>);
}

export default Home;