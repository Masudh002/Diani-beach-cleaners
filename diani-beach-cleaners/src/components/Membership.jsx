import React from 'react'
import styles, { layout } from "../style";
import Button from './Button';
import { organizers } from '../constants';

const Membership = () => {
  return (
    <section id='member' className=' bg-blue-100 sm:m-4 my-2 rounded-lg'>
        <h1 className='m-2 font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]' >Join the DYBC Community Now?</h1>
      <div className={`${layout.section} sm:m-4 my-2 rounded-lg gap-[40px]`}>
         <div>
              <p className={`${styles.paragraph} max-w-[400px] mt-2`}>At Diani Youth Beach Cleaners, we believe that change is possible when people come 
                 together for a common cause. Our
                 members are an essential part of our community, and their support empowers 
                 us to continue our mission to protect the environment and empowering youth.
              </p>
              <div className=' bg-discount-gradient rounded-lg p-8 my-4'>
                <h1 className=' text-orange-800 font-bold xs:text-[28px] text-[18px]'>Joining Fee: <span className=' text-white'>Ksh 500</span></h1>
                <h1 className=' text-orange-800 font-bold xs:text-[28px] text-[18px]'>Monthly Contributions: <span className=' text-white' >ksh 100</span></h1>
              </div >
              <div className=' text-center'><Button children='Join Us Today!'/></div>
         </div>
         <div className=''>
            <h1 className='font-poppins font-semibold xs:text-[24px] text-[16px] text-black xs:leading-[46px] leading-[36px]'>Organizers</h1>
            <div className='md:grid grid-cols-2 text-center'>
              {organizers.map((organizer) =>(
                <div key={organizer.id} className='flex flex-row p-4 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5'>
                  <img src={organizer.image} alt="pic" className='w-[48px] h-[48px] rounded-full' />
                    <div className="flex flex-col ml-4 hover:text-white">
                      <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">{organizer.name}</h1>
                      <p className="font-poppins font-normal text-[16px] leading-[24px] text-slate-950">{organizer.title}</p> 
                      <p className="font-poppins font-normal text-[16px] leading-[24px] text-slate-900" >{organizer.contact}</p>
                    </div>
                </div>
              ))}
            </div>            
         </div>
      </div>
    </section>
  )
}

export default Membership
