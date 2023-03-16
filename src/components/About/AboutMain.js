import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

const AboutMain = () => {
  return (
    <div className='w-screen bg-gray-100 flex flex-col pb-24 select-none'>
        <div className='mt-36 ml-auto mr-auto flex flex-col gap-4'>
        <h1 className='font-righteous text-4xl font-black text-center'>ABOUT ME</h1>
        <span className='text-center'>😁</span>
        <p className='ml-5 mr-5 text-neutral-500 text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming & technology</p>
        </div>

        <main className='mt-20 flex flex-col gap-10 ml-5 mr-5 justify-center xl:flex-row md:flex-row sm:flex-row'>
          <AboutLeft />
          <AboutRight />
        </main>
    </div>
  )
}

export default AboutMain