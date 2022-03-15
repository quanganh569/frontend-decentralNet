import Image from 'next/image'
import React from 'react'
import imgHero from '../../assets/imgs/whatisdec.png'
import iconBrave from '../../assets/social/braveIcon.png'
import iconOpera from '../../assets/social/operaIcon.png'
import iconChrome from '../../assets/social/chromeIcon.png'
import iconFirefox from '../../assets/social/firefoxIcon.png'
import iconEdge from '../../assets/social/edgeIcon.png'
import iconArrowUp from '../../assets/social/arrowupright.png'
import iconApple from '../../assets/social/appleIcon.png'
import iconLaptop from '../../assets/social/laptopIcon.png'
import iconAndroid from '../../assets/social/androidIcon.png'
import iconView from '../../assets/social/iconView.png'
import iconZoom from '../../assets/social/iconZoom.png'
import coinbaseIcon from '../../assets/teamlogo/coinbaseIcon.png'
import rainbowIcon from '../../assets/teamlogo/rainbowIcon.png'
import chainlinkIcon from '../../assets/teamlogo/chainlinkIcon.png'

const SubHero = () => {
  const array = [
    {
      logo: iconBrave,
      name: 'Brave',
      operation: false,
    },
    {
      logo: iconOpera,
      name: 'Opera',
      operation: true,
    },
    {
      logo: iconChrome,
      name: 'Chrome',
      operation: false,
    },
    {
      logo: iconFirefox,
      name: 'Firefox',
      operation: false,
    },
    {
      logo: iconEdge,
      name: 'Edge',
      operation: false,
    },
  ]

  const arrayApplication = [
    {
      logo: coinbaseIcon,
      title: 'Coinbase Wallet',
      description:
        'Coinbase is a digital currency exchange headquartered in Sa...',
    },
    {
      logo: chainlinkIcon,
      title: 'Chainlink',
      description: 'Connect an Unstoppable Domain to your online identity.',
    },
    {
      logo: rainbowIcon,
      title: 'Rainbow Wallet',
      description:
        'Rainbow is a fun, simple, and secure Ethereum wallet that... ',
    },
    
  ]
  return (
    <React.Fragment>
      <div className="container my-20 grid grid-cols-2 gap-4">
        <div className="mx-auto my-20">
          <p className="text-[48px] font-bold">
            What is a <br />
            Decentralized DNS?
          </p>
          <p className="my-10">
            NFT domains are domains that live on a public blockchain and
            <br /> give users complete ownership of their stored data
          </p>
          <p className="button-domain flex h-[42px] w-[222px]  cursor-pointer rounded-[40px] bg-[#2048D9] text-white">
            <span className=" mx-auto text-lg font-bold ">Learn more</span>
          </p>
        </div>
        <div>
          <Image src={imgHero} />
        </div>
      </div>
      {/* =================================================================================== */}

      <div className="">
        <p className=" text-center text-[45px] font-bold ">
          Supported Browsers
        </p>

        <div className="grid grid-cols-5  gap-4 py-10 container ">
          {array.map((item) => {
            return (
              <div className="d-flex justify-content-center mx-auto">
                <div>
                  <Image src={item.logo} />
                </div>
                <div className="flex">
                  <p className=" mx-3 text-[18px] font-extrabold text-[#0439F4]">
                    {item.name}
                  </p>{' '}
                  <Image src={iconArrowUp} />
                </div>
                {item.operation ? (
                  <div className="d-flex justify-content-between mx-5 flex content-center  py-2">
                    <div className="px-1">
                      {' '}
                      <Image src={iconLaptop} />
                    </div>

                    <div className="px-1">
                      {' '}
                      <Image src={iconAndroid} />
                    </div>
                    <div className="px-1">
                      {' '}
                      <Image src={iconApple} />
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between mx-5 flex content-center  py-2">
                    <div className="px-1">
                      {' '}
                      <Image src={iconLaptop} />
                    </div>

                    <div className="px-1">
                      {' '}
                      <Image src={iconAndroid} />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {/* =================================================================================== */}

      <div className="container border-2 border-[#BFBBBB]  shadow-lg">
        <div className="m-5 grid  grid-cols-2 gap-4 border-b-2 border-[#C7B7B7]  py-5">
          <div className="">
            <p className="text-[30px] font-bold">Applications</p>
            <span className="bg-gradient-to-r from-[#AC38BF] via-[#2A4CC6] to-[#893996] bg-clip-text text-[15px] font-bold text-transparent">
              Applications that support Unstoppable Domains
            </span>
          </div>
          <div className="mx-5 ml-auto flex">
            {' '}
            <div className="button-application mr-5 h-[45px] ">
              <p className="m-1 flex">
                {' '}
                <span className="mx-auto mx-4 mt-2">
                  <Image src={iconView} />
                </span>
                <p className="mx-auto my-2 mx-2 font-bold text-[#054BFF]">
                  View Applications
                </p>
              </p>
            </div>
            <div className="button-application h-[45px] ">
              <p className="m-1 flex">
                {' '}
                <span className="mx-auto mx-4 mt-2">
                  <Image src={iconZoom} />
                </span>
                <p className="mx-auto my-2 mx-2 font-bold text-[#054BFF]">
                  Submit Your Applications
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className=" mx-20 my-10 grid grid-cols-3 gap-4 p-5">
          {arrayApplication.map((item) => {
            return (
              <div className="my-3">
                <div className="flex">
                  <div>
                    <Image src={item.logo} />
                  </div>
                  <div className="px-3">
                    <p className="text-[20px] font-bold text-[#4378FF]">
                      {item.title}
                    </p>
                    <p className="text-[16px]">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="h-[95px] bg-[#F7F7F7] py-10">
          <p className="text-center text-[#4378FF] font-bold text-[20px]">Show more</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SubHero
