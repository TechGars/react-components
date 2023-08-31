import { Carousel } from '.';
import React from 'react';


const meta = {
  title: 'Carousel',
  component: Carousel,
  tags:['autodocs'],
  argTypes:{
    nav:{control:'boolean'},
    fadeIn:{control:'boolean'},
  },
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Main = (args) => {

  return(
    <div className='flex items-center justify-center w-screen h-screen bg-dark-grey'>

      <Carousel
        {...args}
        variant='fade-in'
        className='w-1/2 h-2/3'
      >
        <img src={"https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2023/08/15/21/50/squirrel-8192899_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_960_720.jpg"} alt="watermelon" className='w-full' />
      </Carousel>

    </div>
  )
}
export const ScrollSnap = (args) => {

  return(
    <div className='flex items-center justify-center w-screen h-screen bg-dark-grey'>

      <Carousel
        variant='scroll'
        {...args}
        className='w-1/2 h-2/3'
      >
        <img src={"https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2023/08/15/21/50/squirrel-8192899_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_960_720.jpg"} alt="watermelon" className='w-full' />
      </Carousel>

    </div>
  )
}
export const AutoPlay = (args) => {

  return(
    <div className='flex items-center justify-center w-screen h-screen bg-dark-grey'>

      <Carousel
        variant='auto-play'
        interval={3}
        {...args}
        className='w-1/2 h-2/3'
      >
        <img src={"https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2023/08/15/21/50/squirrel-8192899_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678_960_720.jpg"} alt="watermelon" className='w-full' />
        <img src={"https://cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_960_720.jpg"} alt="watermelon" className='w-full' />
      </Carousel>

    </div>
  )
}
