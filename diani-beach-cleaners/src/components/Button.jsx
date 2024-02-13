import React from 'react'

const Button = ( {onClick, children}) => {
  return (
    <div>
      <button type='button' onClick={onClick} className=' bg-orange-500 hover:bg-orange-400  p-3 text-white rounded-lg outline-none font-poppins font-medium'>
        {children}
      </button>
    </div>
  )
}

export default Button
