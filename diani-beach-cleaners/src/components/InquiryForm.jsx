import React from 'react'
import Button from './Button'


const InquiryForm = () => {
  return (
    <div className=' bg-blue-gradient m-4 rounded-lg p-4 flex flex-col content-center items-center'>
      <div className=' mb-4'>
        <h1 className='font-poppins font-semibold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>Send us your Inquiry</h1>
        <p>Do you want to join us as a volunteer, partner or sponsor <br /> Kindly fill in the form</p>
      </div>
      <div>
         <form className=' bg-cyan-400 p-4 rounded-lg' >
             <input type="text" className=' border-[1px] border-black m-2 p-2  text-xl outline-none rounded-[4px] sm:text-center' placeholder='First and Last Name' required/> 
             <input type="email" className='border-[1px] border-black m-2 p-2  text-xl outline-none rounded-[4px] sm:text-center' placeholder='Email address' required />
             <p className=' '>Join us as:</p> 
             <input type="checkbox"  style={{ transform: 'scale(1.5)', borderRadius:'50%' }} /> <span className=' text-[20px] ml-2'>Volunteering</span> <br />
             <input type="checkbox"  style={{ transform: 'scale(1.5)' , borderRadius:'50%' }} /> <span  className=' text-[20px] ml-2'> Sponsorship</span> <br />
             <input type="checkbox"  style={{ transform: 'scale(1.5)' , borderRadius:'50%' }} /> <span  className=' text-[20px] ml-2'>Partnership</span>
             <p>Tell us about your needs</p>
             <textarea name="" id="" placeholder='Type your message'></textarea>
             <Button  children="Send Message" />
          </form>
      </div>
    </div>
  )
}

export default InquiryForm
