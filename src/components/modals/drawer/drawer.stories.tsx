import { Drawer } from '.';
import React, { useEffect, useState } from 'react';


const meta = {
  title: 'Drawer',
  component: Drawer,
  argTypes:{
    removeOverlay:{control:'boolean'},
    overlayNone: {  exists: true  },
  },
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Top = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Drawer
        openVariant='top'
        isOpen={isOpen}
        closeDrawer={() => setIsOpen(false)}
        className=' w-full h-1/3 bg-gray-300'
      >

        <div className='text-5xl bg-main-gradient bg-clip-text text-transparent'>Click anywhere outside of the drawer to close</div>
      </Drawer>

      <span onClick={() => setIsOpen(true)} className='cursor-pointer text-white border rounded-3xl p-5 bg-gray-400/70'>Open Drawer</span>
    </div>
  )
}


export const Right = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Drawer
        isOpen={isOpen}
        openVariant='right'
        closeDrawer={() => setIsOpen(false)}
        className='w-1/3 h-full text-white text-2xl p-10 flex flex-col bg-dark-grey'
      >
        <div className='text-5xl bg-main-gradient bg-clip-text text-transparent'>Click anywhere outside of the drawer to close</div>
      </Drawer>

      <span onClick={() => setIsOpen(true)} className='cursor-pointer text-white border rounded-3xl p-5 bg-gray-400/70'>Open Drawer</span>
    </div>
  )
}


export const Bottom = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen border bg-[url("https://images.pexels.com/photos/2861751/pexels-photo-2861751.jpeg")] bg-cover bg-fixed'>

      <Drawer
        isOpen={isOpen}
        openVariant='bottom'
        closeDrawer={() => setIsOpen(false)}
        className='h-1/4 w-full text-white text-2xl bg-dark-grey'
      >
        <div className='text-5xl bg-main-gradient bg-clip-text text-transparent'>Click anywhere outside of the drawer to close</div>
      </Drawer>

      <span onClick={() => setIsOpen(true)} className='cursor-pointer text-white border rounded-3xl p-5 bg-gray-400/70 drop-shadow-underline'>Open Drawer</span>
    </div>
  )
}

export const Left = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Drawer
        openVariant='left'
        backdrop
        bdBlur='md'
        bdDark='md'
        isOpen={isOpen}
        closeDrawer={() => setIsOpen(false)}
        className='h-full w-1/3 bg-gray-300 text-white text-2xl flex flex-col justify-center items-center'
      >

        <div className='text-5xl bg-main-gradient bg-clip-text text-transparent drop-shadow-underline p-10'>Click anywhere outside of the drawer to close</div>
      </Drawer>

      <span onClick={() => setIsOpen(true)} className='cursor-pointer text-white border rounded-3xl p-5 bg-gray-400/70'>Open Drawer</span>
    </div>
  )
}