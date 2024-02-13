import React from 'react'
import { upcomingEvents } from '../constants'
import image from '../assets/next.jpg';

const Events = () => {
  return (
    <section id='Event' className='sm:m-4 my-2 rounded-lg pb-4 backphoto'>
        <h1 className='m-2 font-poppins font-bold xs:text-[32px] text-[20px] text-black xs:leading-[50px] leading-[40px]'>Explore Our Events</h1>
      <div>
        <h1 className=' text-center font-poppins font-semibold xs:text-[24px] text-[16px] text-black xs:leading-[46px] leading-[36px]'>Previous Events</h1>
        <div className=' bg-transparent sm:m-12 m-4 rounded-lg z-10 backdropFilter'>
          <h1 className=' text-center font-poppins font-semibold xs:text-[24px] text-[16px] text-black xs:leading-[46px] leading-[36px]'>Upcoming Events</h1>
         { upcomingEvents.map((upcomingEvent) =>(
           <div className=' p-4'>
             <h1 className=' font-poppins text-black xs:text-[20px] text-[12px] xs:leading-[40px] leading-[30px] font-bold mb-4'>{upcomingEvent.title}</h1>
             <div className=' flex flex-row  flex-wrap'>
                <div className=' flex-1'>
                  {upcomingEvent.events.map((event) => (
                    <div key={event.id} className=' p-4 cursor-pointer max-w-[280px] rounded-lg text-black hover:text-white font-poppins font-semibold z-50 feature-card'>
                     <p>{event.date}</p>
                     <p>{event.event}</p>
                   </div>                  
                  ))}
                </div>
               <div>
                <h1 className=' text-white xs:text-[24px] text-[16px] xs:leading-[40px] leading-[30px] font-poppins font-bold mb-2'>Coming soon</h1>
                <img src={image} alt="img" className=' h-auto sm:h-[440px] w-full pr-8' />
               </div>
             </div>
           </div>
         ))}
        </div>
      </div>
      
    </section>
  )
}

export default Events
