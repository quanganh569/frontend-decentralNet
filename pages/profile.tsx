import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cover from '../components/Profile/Cover'
import OnSaleLayout from '../components/Profile/OnSaleLayout'

const ProfileLayout = () => {
  return (
    <div>
      <Head>
        <title>Profile-DecentralNet</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
        />
        <Script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></Script>
      </Head>
      <Header />
      <Cover />
      <OnSaleLayout />
      
      <Footer />
    </div>
  )
}

export default ProfileLayout
