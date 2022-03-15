import React from 'react'
import Image from 'next/image'
import bannerImg from '/assets/imgs/DownloadPage.png'
import Button from '../../commons/Button'

const HeroLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
        <p className="static m-2 uppercase text-xs font-semibold uppercase	text-[#748FB5]">
          READY TO USE DecentralNet?
        </p>
        <p className="static m-1 text-4xl  font-semibold	text-[#272E35]">
          Download DecentralNet
        </p>
        <p className="m-3 text-center text-[#6E757C]">
          By downloading Solo, you accept
          <a
            className="text-[#FF6E30]"
            href="https://github.com/"
            target="_blank"
          >
            {' '}
            Terms Of Use
            <br />
          </a>
          and{' '}
          <a
            className="text-[#FF6E30]"
            href="https://github.com/"
            target="_blank"
          >
            Privacy & Cookies.
          </a>
        </p>
        <Button variant="primary">
          <b>Get DecentralNet for iPad OS</b>
        </Button>
        <div className="w-full sm:w-1/2">
          <Image src={bannerImg} alt="" />
        </div>
      </div>
  )
}

export default HeroLayout
