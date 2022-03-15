import React from 'react'
import Image from 'next/image'
import userImg from '../../assets/teamlogo/userImg.png'
import devImg from '../../assets/teamlogo/devImg.png'
import walletImg from '../../assets/teamlogo/walletImg.png'
import defiImg from '../../assets/teamlogo/defiImg.png'
const SolutionsLayout = () => {
  const array = [
    {
      img: userImg,
      title: 'Users',
      description: 'STM',
      badge: '24h',
    },
    {
      img: devImg,
      title: 'Developers',
      description: 'TBX',
      badge: '24h',
    },
    {
      img: walletImg,
      title: 'Wallet',
      description: 'XRP',
      badge: '24h',
    },
    {
      img: defiImg,
      title: 'Defi',
      description: 'UBW',
      badge: '24h',
    },
  ]
  return (
    <div className="container md:px-40 mt-20 mb-10">
      <p className="text-center text-[48px] font-bold py-5">Solutions</p>
      <div className=" ml-10 grid grid-cols-2 gap-4 ">
        {array.map((item) => {
          return (
            <div className="rounded-t-[35.4849px] rounded-b-[35.4849px] bg-white shadow-2xl">
              <div className="flex border-b-[1px]">
                <div className="m-5 text-left">
                  <Image src={item.img} />
                </div>
                <div className="m-10 mr-auto">
                  <p className="text-[18px] font-bold">{item.title}</p>
                  <p className="text-[14px] text-[#808191]">{item.description}</p>
                </div>
                <div className="m-10 ml-auto">
                  <span className="mr-2 rounded bg-blue-100 px-5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="h-[100px] rounded-b-[35.4849px] bg-white"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SolutionsLayout
