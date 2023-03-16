import Header from '@/components/Header/Header'
import React from 'react'
import Head from 'next/head'
import AboutMain from '@/components/About/AboutMain'
import Footer from '@/components/Footer/Footer'

const about = () => {
  return (
    <>
    <Head>
        <title>Emmanuel Taiwo - Software Engineer - About Me</title>
        <meta name="description" content="Emmanuel Taiwo - Software Engineer - About Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
    </Head>
      <Header />
      <AboutMain />
      <Footer />
    </>
  )
}

export default about