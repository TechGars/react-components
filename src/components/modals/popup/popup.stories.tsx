import { Popup } from '.';
import React, { useEffect, useRef, useState } from 'react';
import { Primary } from '../../buttons/Primary';


const meta = {
  title: 'Popup',
  component: Popup,
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Main = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // if(isOpen){
    //   testRef.current?.showModal()
    // }else{
    //   testRef.current?.close()
    // }
    // open()
  },[])

  // const testRef = useRef<HTMLDialogElement>(null)
  // const open = () => testRef.current?.showModal()
  const close = () => setIsOpen(false)
  // const close = () => testRef.current?.close()1
  
  return(
    <div className='z-[50] flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        // ref={ testRef }
        isOpen={ isOpen }
        backdrop
        blur='sm'
        opacity='md'
        className='rounded-md bg-gray-700 text-white shadow-button-up drop-shadow-scaled'
        close={() => close()}
      >

        <div className='text-2xl p-20 flex flex-col h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <Primary onClick={() => setIsOpen(true)} className='text-white text-2xl px-5 py-2 bg-dark-grey'>Open Modal</Primary>
      {/* <Primary onClick={() => open()} className='text-white text-2xl px-5 py-2 bg-dark-grey'>Open Modal</Primary> */}
    </div>
  )
}

export const slideUp = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        open={ isOpen }
        variant='up'
        backdrop
        opacity='md'
        close={() => setIsOpen(false)}
        className='bg-dark-grey text-white rounded-md'
      >

        <div className='text-2xl p-20 h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <Primary onClick={() => setIsOpen(true)} className='text-white text-2xl px-5 py-2 rounded-md bg-dark-grey'>Open Modal</Primary>
    </div>
  )
}

export const slideRight = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        open={ isOpen }
        variant='right'
        backdrop
        opacity='md'
        close={() => setIsOpen(false)}
        className='rounded-3xl text-white bg-gray-700'
      >

        <div className='text-2xl p-20 flex flex-col h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <Primary onClick={() => setIsOpen(true)} className='text-white text-2xl px-5 py-2 rounded-xl bg-dark-grey'>Open Modal</Primary>
    </div>
  )
}

export const slideLeft = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        open={ isOpen }
        variant='left'
        close={() => setIsOpen(false)}
        className='text-white bg-dark-grey'
      >

        <div className='text-2xl p-20 flex flex-col h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <Primary onClick={() => setIsOpen(true)} className='text-white text-2xl px-5 py-2 rounded-3xl bg-dark-grey'>Open Modal</Primary>
    </div>
  )
}

export const scale = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        open={ isOpen }
        variant='scale'
        close={() => setIsOpen(false)}
        className='text-white bg-dark-grey'
      >

        <div className='text-2xl p-20 flex flex-col h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <Primary onClick={() => setIsOpen(true)} className='text-white text-2xl px-5 py-2 rounded-xl bg-dark-grey'>Open Modal</Primary>
    </div>
  )
}

export const glass = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        open={ isOpen }
        variant='right'
        glass
        glassBlur='md'
        backdrop
        opacity='md'
        close={() => setIsOpen(false)}
        className='rounded-3xl text-white'
      >

        <div className='text-2xl p-20 flex flex-col h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <Primary glass  onClick={() => setIsOpen(true)} className='text-white text-2xl px-5 py-2 rounded-xl'>Open Modal</Primary>
    </div>
  )
}
