import React, { useState } from 'react'
import close from '../assets/close.svg'
import Button from './Button'
import email from '../assets/email.svg'
import styles from '../style'

const ContactForm = () => {
    const [showContactForm, setShowContactForm] =useState(true);
    function submitForm( event){
        event.preventDefault();
        alert('submitting');
    }
  return (
    <div className='' id='contact' >
        <div className='text-center m-8 font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>
            <Button onClick={()=> setShowContactForm((prev) =>!prev)} children='Contact Us'/>
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
                 <form className='' onSubmit={submitForm}>
                     <input type="text" className={`${styles.input} w-full`} placeholder='First and Last Name' required/> 
                     <input type="email" className={`${styles.input} w-full`} placeholder='Email address' required /> 
                     <textarea name="" className={`${styles.input} w-full max-h-[120px]`} placeholder='Message' id=""></textarea>
                     <button className={`${styles.button}`}>Send Message</button>
                 </form>
             </div>
         </div>       
        </div>
        
    </div>
  )
}

export default ContactForm
