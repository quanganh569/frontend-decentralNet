import Image from 'next/image'
import React from 'react'
import product from '../../assets/imgs/products.png'
import Button from '../../commons/Button'
import cursor from '../../assets/imgs/cursor.png'
const ProductsLayout = () => {
  const array = [
    {
      image: product,
      title: 'Decentrallized Hosting/ CDN',
      description:
        'Provide distributed storage infrastructure at a cheap cost.',
      icon: cursor,
      btn: 'Create now',
      class: 'mr-auto order-first',
    },
    {
      image: product,
      title: 'Decentrallized DNS',
      description: 'Create a new digital asset space on near, NFT domain',
      icon: cursor,
      btn: 'Create now',
      class: 'ml-auto order-last',
    },

    {
      image: product,
      title: 'Decentrallized Hosting/ CDN',
      description:
        'Provide distributed storage infrastructure at a cheap cost.',
      icon: cursor,
      btn: 'Create now',
      class: 'mr-auto order-first',
    },
    {
      image: product,
      title: 'Decentrallized VPN',
      description:
        'Peace of mind about privacy, security. Faster, more stable than traditional VPNs.',
      icon: cursor,
      btn: 'Create now',
      class: 'ml-auto order-last',
    },
  ]

  return (
    <div className=" mx-20  mt-40">
      <p className="text-center text-[48px] font-bold">Products</p>

      {array.map((item) => {
        return (
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
            <div className={`${item.class} mt-[5em]`}>
              <Image src={item.image} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsLayout
