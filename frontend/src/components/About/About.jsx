import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section>
            <div className='container'>
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/*===== about img===========*/}
                    <div className='relative w-3/4 lg:w-[770px] z-[10] order-2 lg:order-1'>
                        <img src={aboutImg} alt="" />
                        <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/*======= about content========*/}

                    <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                        <h2 className="heading">Proud to be one of the  nations best</h2>
                        <p className='text_para'>
                            We are proud to be one of the nation's best healthcare platforms, connecting patients with top professionals for personalized, accessible care. Our user-friendly platform simplifies appointments, medical records, and online consultations, enhancing the healthcare experience through technology and compassionate service                        </p>
                        <p className='text_para mt-[30px]'>
                            Our team enhances our services to provide reliable, high-quality healthcare. We expand our specialist network to ensure comprehensive care. At MediCareHub, trust and quality are paramount. Join us in improving health and well-being nationwide.</p>
                        <Link to='/'>
                            <button className='btn'>Learn more</button>
                        </Link>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default About