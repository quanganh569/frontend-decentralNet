import React from 'react'
import Button from '../../commons/Button'
import iconRight from '../../assets/imgs/arrow-right.png'
import Image from 'next/image'
import Link from 'next/link'
const HeroLayout = () => {
  const arrayTypeDomain = [
    { name: '.zil' },
    { name: '.crypto' },
    { name: '.coin' },
    { name: '.wallet' },
    { name: '.bitcoin' },
    { name: '.x' },
    { name: '.888' },
    { name: '.nft' },
    { name: '.dao' },
  ]
  return (
    <React.Fragment>
      <div className="container my-20">
        <div>
          {' '}
          <p className=" line-height-[60px] text-center text-[50px] font-bold">
            NFT DOMAINS
            <br />{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-bold text-transparent">
              {' '}
              No Renewal Fees Ever
            </span>
          </p>
        </div>
        <div className="container my-10 flex w-full ">
          {arrayTypeDomain.map((item) => {
            return (
              <span className="button-domain mx-5 cursor-pointer">
                <span className="bg-gradient-to-r from-[#0F1011] via-[#634795] to-[#BE19D9] bg-clip-text font-bold text-transparent">
                  {item.name}
                </span>
              </span>
            )
          })}
        </div>
        <p className="py-10 text-center text-[18px] text-[#867A7A]">
          Grab yours before it's gone forever. Starting at $5+
        </p>
        <div className="relative px-20">
          {' '}
          <input
            className="h-[70px] w-full rounded-[40px] pl-20 shadow-2xl "
            type="text"
            placeholder="Search for your domain"
          />
          <div className="absolute right-[3em] bottom-0 ">
            <p className="button-domain flex h-[70px] w-[285px]  cursor-pointer rounded-[40px] bg-[#2048D9] text-white">
              <Link href="searchDomain">
                <span className=" mx-auto text-lg font-bold ">Search</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative my-20 flex border-t-[1px] border-black ">
        <div className="absolute left-[35%] bottom-[-1em] flex  bg-[#FCFCFD]">
          <span className=" mx-auto text-lg font-bold ">
            🎉 No Renewal Fees, No Minting Fees, No Gas Fees
          </span>
          <span className="flex px-5">
            {' '}
            <span className=" text-lg font-bold text-[#073DFD] ">
              Learn More
            </span>
            <span className="mx-2 mt-1">
              <Image src={iconRight} />
            </span>
          </span>
        </div>
      </div>

      <div className="grid h-[260px] grid-cols-3 gap-4 rounded-b-[24px] bg-gradient-to-r from-[#5755DB] to-[#99DBD3] px-20">
        <div className="m-auto text-center">
          <p className="text-[72px] font-bold text-white">2.1M+</p>
          <p className="text-[18px] text-white">Domains Registered</p>
        </div>
        <div className="m-auto text-center">
          <p className="text-[72px] font-bold text-white">275+</p>
          <p className="text-[18px] text-white">Coins + Tokens Supported</p>
        </div>
        <div className="m-auto text-center">
          <p className="text-[72px] font-bold text-white">140+</p>
          <p className="text-[18px] text-white">Integrations</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroLayout
