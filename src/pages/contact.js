import Header from '@/components/Header/Header'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer/Footer'
import ContactMain from '@/components/Contact/ContactMain'

const contact = () => {
//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])
  return (
    <>
    <Head>
        <title>Emmanuel Taiwo - Software Engineer - Contact me</title>
        <meta name="description" content="Emmanuel Taiwo - Software Engineer - Contact me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
    </Head>

      <Header />
      <ContactMain />
      <Footer />
    </>
  )
}

export default contact