import React from 'react'
import Button from './Button'
import styles, { layout } from "../style";
import close from '../assets/close.svg'

const InquiryForm = ( {onClick}) => {
  /*const[formData, setFormData] = useState({
    fullname:"",
    email:"",
    phoneNo:"",
    checked:""
   }
 )*/
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
         <form className=' bg-cyan-400 p-4 rounded-lg' >
             <input type="text" name='fullname' className=' border-[1px] border-black m-2 p-2  text-xl outline-none rounded-[4px] sm:text-center' placeholder='Full Name' required/> 
             <input type="email" className='border-[1px] border-black m-2 p-2  text-xl outline-none rounded-[4px] sm:text-center' placeholder='Email address' required />
             <input type='text' className='border-[1px] border-black m-2 p-2  text-xl outline-none rounded-[4px] sm:text-center' placeholder='Phone no:' required />
             <p className=' '>Join us as:</p> 
             <input type="checkbox"  style={{ transform: 'scale(1.5)', borderRadius:'50%' }} /> <span className=' text-[20px] ml-2'>Volunteering</span> <br />
             <input type="checkbox"  style={{ transform: 'scale(1.5)' , borderRadius:'50%' }} /> <span  className=' text-[20px] ml-2'> Sponsorship</span> <br />
             <input type="checkbox"  style={{ transform: 'scale(1.5)' , borderRadius:'50%' }} /> <span  className=' text-[20px] ml-2'>Partnership</span>
             <p className=' my-2'>Tell us about your needs</p>
             <textarea name="" id="" className=' w-full max-h-[120px] min-h-[60px] outline-none p-2 rounded-md mb-2 text-lg' placeholder='Type your message'></textarea>
             <div className=' text-center'>
             <Button  children="Send Message" />
             </div>
          </form>
      </div>
    </div>
  )
}

export default InquiryForm
