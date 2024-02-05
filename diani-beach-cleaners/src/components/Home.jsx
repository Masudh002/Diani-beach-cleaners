import React from 'react'
import Button from './Button'
import db  from '../assets/db.jpg';
import DB from '../assets/DB.jpg';
import { stats } from '../constants';
import styles from "../style";


const Home = () => {
  return (
    <section id='home' className=' flex content-center items-center flex-col text-center gap-1'>
      <div className={`${styles.flexCenter} flex-row sm:mb-4 mb-2 bg-discount-gradient rounded-lg`}>
      {stats.map((stat) => (
           <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
           <h4 className="font-poppins font-semibold xs:text-[28px] text-[18px] xs:leading-[40px] leading-[30px] text-blue">
             {stat.value}
           </h4>
           <p className="font-poppins font-normal xs:text-[14px] text-[8px] xs:leading-[14px] leading-[8px] text-white uppercase ml-3">
             {stat.title}
           </p>
         </div>
        ))}
      </div>
      <p className=' text-orange-500 sm:text-[28px] text-[20px] font-poppins font-medium '>Welcome to Diani Youth Beach Cleaning & Management Services!</p>
      <p className=' text-black'> We are dedicated to preserving the beauty of our beaches through sustainable cleaning practices and commmunity engagement.</p>
      <p className=' text-black'>Join us on a journey to preserve the pristine beauty of Diani's beaches, fostering a community driven commitment to environment harmony.</p>
      <p className=' text-black'>Lets work together to inspire the next generation and make a lasting difference.</p>
      <div className=' m-4'> 
       <Button children="Support Us"/>
      </div>
      <div className=' flex flex-col gap-2 sm:flex-row'>
        <img src={db} alt="bd" className=' w-full h-[280px]' />
        <img src={DB} alt=" DB" className=' w-full h-[280px]' />
      </div>

    </section>
  )
}

export default Home
