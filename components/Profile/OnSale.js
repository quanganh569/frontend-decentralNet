import React from 'react'
import Image from 'next/image'
import avatar from '/assets/imgs/avatar.png'
import candlesticks from '/assets/imgs/candlesticks.svg'

const OnSale = (
  { preview,
    name,
    price,
  }
) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center mt-20 w-64"
    >
      <Image
        src={preview}
        width={256}
        height={320}
        className="rounded-xl"
        layout='fixed'
        alt=""
      />

      <div className="flex flex-row items-center justify-between w-full mt-4">
        <p className="static text-base m-1 font-medium">
          {name}
        </p>
        <div className="static border-2 rounded-md px-2 text-base border-green-400 text-green-400">
          {price}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full my-3">
        <div className="flex flex-row items-center">
          <Image src={avatar} height={18} width={18} className="rounded-full bg-purple-400" />
          <Image src={avatar} height={18} width={18} className="rounded-full bg-red-400" />
          <Image src={avatar} height={18} width={18} className="rounded-full bg-green-400" />
        </div>
        <p className="static text-sm m-1">
          {"3 in stock"}
        </p>
      </div>

      <div className="w-full border rounded" />

      <div className="flex flex-row items-center justify-between w-full my-3">
        <div className="flex flex-row items-center">
          <Image src={candlesticks} height={18} width={18} className="" />
          <p className="static text-xs text-[#6E757C]">
            {"Highest Bid"}
          </p>
          <p className="static text-xs font-medium m-1">
            {"0.001 ETH"}
          </p>
        </div>
        <p className="static text-xs text-[#6E757C]">
            {"New bid 🔥"}
          </p>
      </div>


    </div>
  )
}

export default OnSale
