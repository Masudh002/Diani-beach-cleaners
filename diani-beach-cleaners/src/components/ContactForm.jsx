import React, { useState } from 'react'
import close from '../assets/close.svg'
import Button from './Button'
import email from '../assets/email.svg'

const ContactForm = () => {
    function submitForm( event){
        event.preventDefault();
    }
    const [showContactForm, setShowContactForm] =useState(true);
  return (
    <div className='' id='contact' >
        <div  onClick={()=> setShowContactForm((prev) =>!prev)} 
          className='text-center m-8 font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>
            <Button children='Contact Us'/>
        </div>
        <div className={`${!showContactForm? "flex":"hidden"} flex justify-center items-center flex-col
         bg-white m-4 box-shadow rounded-lg text-center p-6 fixed top-0 right-0 left-0 bottom-0  mx-4 my-2 min-w-[140px] z-10`}>
         <img src={close} alt=" close" className=' absolute top-0 right-2 p-4' onClick={()=> setShowContactForm((prev) =>!prev)}/>
        
         <div className=' flex flex-col items-center mt-8 p-8 gap-4'>
             <div>
                 <img src={email} alt="messagebox" />
             </div>
             <div>
                 <h1 className='font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>Contact Us</h1>
             </div>
             <div className=' '> 
                 <form className='' onClick={submitForm}>
                     <input type="text" className=' border-[1px] border-black m-2 p-2 w-full text-xl outline-none rounded-[4px] sm:text-center' placeholder='First and Last Name' required/> 
                     <input type="email" className='border-[1px] border-black m-2 p-2 w-full text-xl outline-none rounded-[4px] sm:text-center' placeholder='Email address' required /> 
                     <textarea name="" className='border-[1px] border-black m-2 p-2 w-full text-xl outline-none rounded-[4px] sm:text-center max-h-[120px]' placeholder='Message' id=""></textarea>
                     <Button  children="Send Message" />
                 </form>
             </div>
         </div>       
        </div>
        
    </div>
  )
}

export default ContactForm
