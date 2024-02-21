import React from 'react'
import styles from "../style";
import close from '../assets/close.svg'
import { useState } from 'react'

const InquiryForm = ( {onClick}) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const[formData, setFormData] = useState({
    fullname:"",
    email:"",
    phoneNo:"",
    isChecked:false,
    isJoined:false,
    isClicked:false
   }
 )
 function handleChange(event) {
  const { name, value, type, checked } = event.target;

  if (type === "checkbox") {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        isChecked: name === "isChecked" ? checked : false,
        isJoined: name === "isJoined" ? checked : false,
        isClicked: name === "isClicked" ? checked : false
      };
    });
  } else {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }
}

function handleSubmit(event){
  event.preventDefault();
}
  return (
    <div className=' bg-blue-gradient w-full m-4 sm:mx-[10%] rounded-lg p-4 flex flex-col content-center items-center'>
      <div className=' '>
        <img src={close} alt="closeicon" onClick={onClick} />
      </div>
      <div className=' mb-4'>
        <h1 className='font-poppins font-semibold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>Send us your Inquiry</h1>
        <p className={`${styles.paragraph}  mt-2`}>Do you want to join us as a volunteer, partner or sponsor? <br /> Kindly fill in the form below</p>
      </div>
      <div>
         <form className=' bg-cyan-400 p-4 rounded-lg' onSubmit={handleSubmit} >
             <input type="text" name='fullname' value={formData.fullname} onChange={handleChange} className={`${styles.input}`} placeholder='Full Name' required/> 
             <input type="email" name='email' value={formData.email} onChange={handleChange} className={`${styles.input}`} placeholder='Email address' required />
             <input type='text' name='phoneNo' value={formData.phoneNo} onChange={handleChange} className={`${styles.input}`} placeholder='Phone no:' required />
             <p className=' '>Join us as:</p> 
             <input type="checkbox" name='isChecked' checked={formData.isChecked} onChange={handleChange}  style={{ transform: 'scale(1.5)'}} /> <span className=' text-[20px] ml-2'>Volunteering</span> <br />
             <input type="checkbox" name='isJoined' checked={formData.isJoined}  onChange={handleChange}  style={{ transform: 'scale(1.5)'}} /> <span  className=' text-[20px] ml-2'> Sponsorship</span> <br />
             <input type="checkbox" name='isClicked' checked={formData.isClicked} onChange={handleChange}  style={{ transform: 'scale(1.5)'}} /> <span  className=' text-[20px] ml-2'>Partnership</span>
             <p className=' my-2'>Tell us about your needs</p>
             <textarea name="" id="" className=' w-full max-h-[120px] min-h-[60px] outline-none p-2 rounded-md mb-2 text-lg' placeholder='Type your message'></textarea>
             <div className=' text-center'>
              <button className={`${styles.button}`}>Send Message</button>
             </div>
          </form>
      </div>
    </div>
  )
}

export default InquiryForm
