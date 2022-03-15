import React from 'react'
import Button from '../commons/Button'
import iconFB from '../assets/social/fb.png'
import iconIG from '../assets/social/ig.png'
import iconTW from '../assets/social/tw.png'
import Image from 'next/image'
const Footer = () => {
  const formOnce = [
    { name: 'Name', placeholder: '', star: true },
    { name: 'Email', placeholder: '', star: true },
    { name: 'Phone', placeholder: '', star: false },
    { name: 'Company', placeholder: '', star: false },
  ]
  return (
    <div className="bg-[#1C1D26]">
      <div className="container  ">
        <p className="py-5 text-left text-[48px] font-bold text-white">
          Contact us
        </p>
        <div className=" ml-10 grid grid-cols-2 gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            {formOnce.map((item) => {
              return (
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    <span className="text-white">{item.name}</span>{' '}
                    {item.star && <b className="text-red-600">*</b>}
                  </label>
                  <input
                    className="focus:outline-none focus:shadow-outline w-full appearance-none rounded border bg-[#494A52] py-2 px-3 leading-tight text-gray-700 shadow"
                    type="text"
                    placeholder=""
                  />
                </div>
              )
            })}
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              <span className="text-white">Messenger</span>{' '}
              <b className="text-red-600">*</b>
            </label>
            <textarea className="h-[140px] w-full resize-none rounded-md bg-[#494A52]"></textarea>
          </div>
        </div>
        <div className="mb-3 flex">
          <div className="ml-auto">
            {' '}
            <Button variant="send">Send message</Button>
          </div>
        </div>
      </div>
      <div className="mx-20 flex border-t-[1px] border-[#748FB5] py-5 text-white">
        <div className="mr-auto">
          <span className="text-[13px] text-[#6E757C]">
            © DecentralNet by Decentral Team
          </span>
        </div>
        <div className="ml-auto flex cursor-pointer">
          <div className="px-2 ">
            {' '}
            <Image src={iconFB} />
          </div>

          <div className="px-2">
            {' '}
            <Image src={iconIG} />
          </div>
          <div className="px-2">
            {' '}
            <Image src={iconTW} />
     
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
