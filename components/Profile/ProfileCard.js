import React from 'react'
import Image from 'next/image'
import { GlobeAltIcon, ShareIcon, DotsHorizontalIcon } from '@heroicons/react/outline'
import coin from '/assets/imgs/coin.svg'
import iconTW from '/assets/social/tw-outline.png'
import iconIG from '/assets/social/ig-outline.png'
import iconFB from '/assets/social/fb-outline.png'

const ProfileCard = (
  { avatar,
    name = '',
    walletAddress = '',
    description = '',
    website = '',
    joinDate = '',
    twitter = "https://twitter.com/",
    instagram = "https://www.instagram.com/",
    facebook = "https://www.facebook.com/", }
) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-64 py-8 mb-10 bg-white shadow-xl border rounded-xl">
      <div className="w-32 h-32">
        <Image src={avatar} className="w-32 h-32 rounded-full bg-green-400" />
      </div>
      <p className="static text-2xl mt-5 font-semibold">
        {name}
      </p>
      <p className="static text-base font-semibold flex flex-row text-center">
        {walletAddress}
        <button
          className="pt-1 pl-2"
          onClick={() => { navigator.clipboard.writeText(walletAddress) }}>
          <Image src={coin} />
        </button>
      </p>
      <p className="static text-xs px-12 mt-5  text-[#6E757C]">
        {description}
      </p>
      <a className="static text-base font-semibold flex flex-row text-center mt-8"
        href={website}
        target="_blank"
      >
        <div className="flex items-center pr-2 text-gray-400">
          <GlobeAltIcon className='w-5 h-5 text-gray-400' />
        </div>
        <p className="">
          {website}
        </p>
      </a>
      <div className="flex flex-row mt-12">
        <button className="h-10 mx-2 px-4 rounded-full bg-blue-600 text-sm text-white">
          Follow
        </button>
        <button className="flex justify-center items-center h-10 w-10 mx-2 border-2 text-2xl rounded-full text-gray-400">
          <ShareIcon className='w-6 h-6 text-gray-400' />

        </button>
        <button className="flex justify-center items-center h-10 w-10 mx-2 border-2 text-2xl rounded-full text-gray-400">
          <DotsHorizontalIcon className='w-6 h-6 text-gray-400' />

        </button>
      </div>
      <div className="flex flex-row justify-between w-1/2 my-8 text-xl text-center text-gray-400">
        <a className=""
          href={twitter}
          target="_blank">
          <Image src={iconTW} height={24} width={24} />
        </a>
        <a
          className=""
          href={instagram}
          target="_blank">
          <Image src={iconIG} height={24} width={24} />

        </a>
        <a className=""
          href={facebook}
          target="_blank">
          <Image src={iconFB} height={24} width={24} />

        </a>
      </div>
      <div className="w-3/4 border-t rounded-full  bg-gray-400" />
      <p className="static text-xs px-12 mt-12  text-[#6E757C]">
        Member since {joinDate}
      </p>
    </div>
  )
}

export default ProfileCard
