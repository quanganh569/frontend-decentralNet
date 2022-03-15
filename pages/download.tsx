import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Download/Carousel'
import DeviceLayout from '../components/Download/DeviceLayout'
import HeroLayout from '../components/Download/HeroLayout'

const DownloadLayout = () => {
  return (
    <div>
      <Head>
        <title>Downloads-DecentralNet</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
        />
        <Script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></Script>
      </Head>
      <Header />
      <HeroLayout />
      <DeviceLayout />
      <Carousel />
      <Footer />
    </div>
  )
}

export default DownloadLayout
