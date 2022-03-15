import React from 'react'
import bannerImg from '../assets/imgs/HomePage.png'
import Image from 'next/image'
import Button from '../commons/Button'
const HomePage = () => {
  return (
    <div className=" mx-auto  flex-wrap items-center justify-between md:flex">
      {/* <div className=" md:px-40">
        <p className="text-md  py-10 font-bold md:text-8xl">
   Share to earn,
          <br /> next web3
          <br /> gateway.       
        </p>
        <p>Organize your tasks, lists and reminders in one app.</p>
        <div className="flex py-5">
          <Button variant="primary">
            <b>Download</b>
          </Button>
          <Button variant='secondary'>
            <b>Connect Wallet</b>
          </Button>
        </div>
      </div>
      <div className=" ">
        <Image
          // loader={bannerImg}
          src={bannerImg}
          alt="Picture of the author"
        />
      </div> */}
    </div>
  )
}

export default HomePage
