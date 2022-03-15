import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/Homepage/HomePage'
import SolutionsLayout from '../components/Homepage/Solutions'
// import 'flowbite';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DecentralNet</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
        />
      </Head>
      <div className="bg-[#FCFCFD]">
        <Header />
        <HomePage />
        <SolutionsLayout />
        <Footer />
      </div>

    </div>
  )
}

export default Home
