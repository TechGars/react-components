import { Toast } from '.';
import React, { useEffect, useState } from 'react';


const meta = {
  title: 'Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Main = () => {
  const [message, setIsMessage] = useState<string|null>()
  
  useEffect(() => {
    setIsMessage('This is an example toast message displayed')
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen'>

      <Toast
        message={ message }
        close={() => setIsMessage(null)}
        className='bg-dark-grey text-white rounded-lg'
      />

      <span onClick={() => setIsMessage('This is an example toast message displayed')} className='cursor-pointer'>Open Toast</span>
    </div>
  )
}
