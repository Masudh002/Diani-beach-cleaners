import React from 'react';
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from './Button';



const AboutContent =  ({icon, text, title, index}) => (
  <div className={`flex flex-row p-4 rounded-[20px]   ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-white`}>
      <img src={icon} alt="starImage" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-600 text-[16px] leading-[20px]">
        {text}
      </p>
    </div>
  </div>
)

const About = () => {
  return (
    <section  id="about" className={`${layout.section} bg-red-100 sm:m-4 my-2 rounded-lg`}>
      <div className={`${layout.sectionInfo} ml-4`}>
        <h1 className=' mb-4 font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px] '>What We Do</h1>
        <h2 className={styles.heading2}>
          Beach Clean ups
        </h2>
        <p className={`${styles.paragraph} max-w-[400px] mt-2`}>Embark on a coastal adventure with our services! From energetic beach cleanups that turn conservation into a celebration, 
         to innovative waste management strategies that redefine eco-friendliness - we're more than just
         a service; we're a movement for cleaner, greaner beaches.
       </p> 
       <div className='text-center'>
         <Button children="View Gallery"/>
       </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <h1 className='font-poppins font-semibold xs:text-[24px] text-[16px] text-black xs:leading-[46px] leading-[36px]'>Other Services</h1>
        {features.map((feature, index) => (
          <AboutContent key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default About
