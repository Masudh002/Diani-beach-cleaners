import React from 'react'
import styles from './style';
import { About, Events, Footer, GetInvolved, Home, Membership, Navbar } from './components';
import ContactForm from './components/ContactForm';
import InquiryForm from './components/InquiryForm';

const App = () => {
  return (
    <div className=' bg-slate-100 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className=' mt-[8px] pt-[2px]'>
        <Home />
      </div>
      <About/>
      <GetInvolved/>
      <Events/>
      <Membership/>
      <ContactForm/>
      <InquiryForm/>
      <Footer/>
    </div>
  )
}

export default App
