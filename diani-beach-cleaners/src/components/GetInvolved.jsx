import React, { useState } from 'react'
import Button from './Button'
import styles, { layout } from "../style";
import beach from '../assets/beach.jpg'
import InquiryForm from './InquiryForm';

const GetInvolved = () => {
  const [showForm, setShowForm] = useState(true);
  return (
    <section id='involve'>
      <h1 className='mb-2 font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>Get Involved</h1>
      <div  className={`${layout.section} sm:m-4 my-2 rounded-lg gap-8`}>
      <div>
        <p className={`${styles.paragraph} max-w-[400px]`}>Be the change with us! Volunteer for our vibrant beach cleanup fiestas, where your passion meets purpose.
         Elevate your brand by becoming a sponsor or explore partnerships that reasonate with our shared commitment to coastal preservation.</p>
      </div>
      <div>
        <img src={beach} alt="img" className=' w-full h-[360px]'/>
      </div>
      <div className='flex sm:flex-col flex-row sm:p-4 p-2 sm:gap-4 gap-2 text-center '>
        <Button onClick={()=> setShowForm((prev) =>!prev)} children="Volunteer" />
        <Button onClick={()=> setShowForm((prev) =>!prev)} children='Sponsor' />
        <Button onClick={()=> setShowForm((prev) =>!prev)} children='Partner With Us' />
      </div>
      </div>
      <div className={`${!showForm? "flex":"hidden"} fixed top-0 bottom-0 w-full z-10`}>
        <InquiryForm onClick={()=> setShowForm((prev) =>!prev)}/>
      </div>
    </section>
  )
}

export default GetInvolved
