import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
  return (
    <div className=" bg-gray-900 select-none">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> EMMANUEL TAIWO </h3>
            <p> A Front End Developer with an eye for design and deep understanding of usability goals. </p>
            <div className="flex justify-center my-10">
                <a href="https://www.linkedin.com/in/realemmanuel/" target='_blank'>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src='https://i.ibb.co/5kmh7gS/pngwing-com.png'  className="w-7 md:w-8" />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Linkedin</p>
                    </div>
                </div>
                </a>
                <a href="https://github.com/realemmanuel" target='_blank'>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src='https://i.ibb.co/hBZgb6g/pngwing-com-2.png'  className="w-7 md:w-8" />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Github</p>
                    </div>
                </div>
                </a>
                <a href="https://twitter.com/realdevemmanuel" target='_blank'>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src='https://i.ibb.co/pX7CspW/pngwing-com-1.png'  className="w-7 md:w-8" />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Twitter</p>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Emmanuel Taiwo, 2023. </p>
            <div className="order-1 md:order-2">
                <span onClick={() => router.push('/about')} className="cursor-pointer px-2">About me</span>
                <span onClick={() => router.push('/contact')} className="cursor-pointer px-2 border-l">Contact me</span>
                <span onClick={() => router.push('/projects')} className="cursor-pointer px-2 border-l">Projects</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer