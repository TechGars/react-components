
import { LabeledInput, LabeledTextArea } from '.';
import React from 'react';



const meta = {
  title: 'Input',
  component: LabeledInput,
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Input = () => {

  return(
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <form action="#" className='h-2/3 w-1/3 p-10 flex flex-col gap-10 '>
        <LabeledInput variant='rounded' roundness='lg' name='rounded' type='text' className=''/>
        <LabeledInput variant='standard' name='standard' type='email' className=''/>
        <LabeledInput variant='underline' name='underline' type='phone' className=''/>
      </form>
    </div>
  )
}

export const TextArea = () => {

  return(
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <form action="#" className='flex flex-col p-10 gap-10'>
        <LabeledTextArea variant='rounded' roundness='lg' name='rounded' rows={4} className=''/>
        <LabeledTextArea variant='standard' name='standard' rows={4} className=''/>
        <LabeledTextArea variant='underline' name='underline' rows={4} className=''/>
      </form>
    </div>
  )
}

