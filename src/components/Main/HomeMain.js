import React from 'react'
import { useRouter } from 'next/router'
import Button from '../Button/Button'
import HomeBackground from '../UI/HomeBackground'

const HomeMain = () => {
    const router = useRouter()
  return (
    <HomeBackground>
        <h1 className='text-center ml-auto mr-auto px-3 text-4xl xl:text-6xl md:text-5xl sm:text-left font-black font-righteous'>HEY, I&apos;M EMMANUEL TAIWO 👋</h1>
        <p className='text-center ml-auto mr-auto px-3 text-gray-600'>A Frontend developer building my version of the digital world one step at a time.</p>
        <div onClick={() => router.push('/projects')} className='ml-auto mr-auto'>
          <Button>Projects</Button>
        </div>
    </HomeBackground>
  )
}

export default HomeMain