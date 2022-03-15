import Head from 'next/head'
import React from 'react'
import HeroLayout from '../components/DomainSearch/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'

const searchDomainLayout = () => {
  return (
    <div className="bg-[#FCFCFD]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
          <link
      rel="stylesheet"
      href="https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css"
    />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
      </Head>
      <Header />
      <HeroLayout />
      <Footer />
    </div>
  )
}

export default searchDomainLayout
