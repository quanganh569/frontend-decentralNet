import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FAQLayout from '../components/NFTDomain/FAQ'
import HeroLayout from '../components/NFTDomain/Hero'
import SubHero from '../components/NFTDomain/SubHero'
import WhyUseLayout from '../components/NFTDomain/WhyUse'

const domains = () => {
  return (
    <div>
      <Head>
        <title>DecentralNet</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
      </Head>
      <div className="bg-[#FCFCFD]">
        <Header />
        <HeroLayout />
        <SubHero />
        <WhyUseLayout />
        <FAQLayout />
        <Footer />
      </div>

     
    </div>
  )
}

export default domains
