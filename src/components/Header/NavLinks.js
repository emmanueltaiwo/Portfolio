import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { Transition } from "@headlessui/react";

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const ref = useRef();
  return (
    <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
              <span onClick={() => router.push('/')} className='tracking-widest cursor-pointer select-none'>
                👦 EMMANUEL TAIWO
              </span>
          </div>
            <div className="ml-auto flex items-center">
              <div className="ml-auto hidden md:block">
                <div className="ml-auto flex items-end space-x-10">
                  <li onClick={() => router.push('/')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">HOME</li>

                  <li onClick={() => router.push('/about')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">ABOUT ME</li>
                  
                  <li onClick={() => router.push('/projects')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">MY PROJECTS</li>

                  <li onClick={() => router.push('/contact')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">CONTACT ME</li>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-5 sm:px-3">
            <li onClick={() => router.push('/')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">HOME</li>

            <li onClick={() => router.push('/about')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">ABOUT ME</li>

            <li onClick={() => router.push('/projects')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">MY PROJECTS</li>

            <li onClick={() => router.push('/contact')} className="text-neutral-800 font-medium list-none hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm tracking-widest cursor-pointer select-none">CONTACT ME</li>
              </div>
            </div>
        </Transition>
      </nav>
  )
}

export default NavLinks