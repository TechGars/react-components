import { Popup } from '.';
import React, { useEffect, useRef, useState } from 'react';


const meta = {
  title: 'Popup',
  component: Popup,
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Main = () => {
  const testRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    testRef.current?.showModal()
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        ref={testRef}
        blur='sm'
        backdrop='md'
        close={() => testRef.current?.close()}
      >

        <div className=' text-white text-2xl p-20 flex flex-col bg-dark-grey  h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <button onClick={() => testRef.current?.showModal()} className='cursor-pointer text-white text-2xl'>Open Modal</button>
    </div>
  )
}

export const slideUp = () => {
  const testRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    testRef.current?.showModal()
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        ref={testRef}
        variant='up'
        close={() => testRef.current?.close()}
      >

        <div className=' text-white text-2xl p-20 flex flex-col bg-dark-grey  h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <button onClick={() => testRef.current?.showModal()} className='cursor-pointer text-white text-2xl'>Open Modal</button>
    </div>
  )
}

export const slideRight = () => {
  const testRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    testRef.current?.showModal()
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        ref={testRef}
        variant='right'
        close={() => testRef.current?.close()}
      >

        <div className=' text-white text-2xl p-20 flex flex-col bg-dark-grey  h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <button onClick={() => testRef.current?.showModal()} className='cursor-pointer text-white text-2xl'>Open Modal</button>
    </div>
  )
}

export const slideLeft = () => {
  const testRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    testRef.current?.showModal()
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        ref={testRef}
        variant='left'
        close={() => testRef.current?.close()}
      >

        <div className=' text-white text-2xl p-20 flex flex-col bg-dark-grey  h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <button onClick={() => testRef.current?.showModal()} className='cursor-pointer text-white text-2xl'>Open Modal</button>
    </div>
  )
}

export const scale = () => {
  const testRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    testRef.current?.showModal()
  },[])
  
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <Popup
        ref={testRef}
        variant='scale'
        close={() => testRef.current?.close()}

      >

        <div className=' text-white bg-dark-grey text-2xl p-20 flex flex-col  h-full w-full'>Click anywhere outside of the modal to close</div>
      </Popup>

      <button onClick={() => testRef.current?.showModal()} className='cursor-pointer text-white text-2xl'>Open Modal</button>
    </div>
  )
}
