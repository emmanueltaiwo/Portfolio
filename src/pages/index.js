import React, { useEffect } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HomeMain from '@/components/Main/HomeMain'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <>
      <Head>
        <title>Emmanuel Taiwo - Software Engineer</title>
        <meta name="description" content="Emmanuel Taiwo - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Header />
      <HomeMain />
      <Footer />
    </>
  )
}
