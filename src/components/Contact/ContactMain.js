import React from 'react'
import ContactForm from './ContactForm'

const ContactMain = () => {
  return (
    <div className='w-screen bg-gray-100 flex flex-col pb-24 select-none'>
        <div className='mt-36 ml-auto mr-auto flex flex-col gap-4'>
        <h1 className='font-righteous text-4xl font-black text-center'>CONTACT ME</h1>
        <span className='text-center'>📞</span>
        <p className='ml-5 mr-5 text-neutral-500 text-center'>Feel free to contact me by submitting the form below, and I&apos;ll get back to you as soon as possible</p>
        </div>
        <main className='mt-10 ml-2 mr-2 xl:ml-10 xl:mr-10 md:ml-10 md:mr-10'>
            <ContactForm />
        </main>
    </div>
  )
}

export default ContactMain