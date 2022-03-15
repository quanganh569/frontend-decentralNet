import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
// import { Link } from 'react-scroll'
import Button from '../commons/Button'
import Image from 'next/image'
import Logo from '../assets/imgs/logo.png'
import Solo from '../assets/imgs/solo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { login, logout } from '../config/nearUtils'
import { WalletAccount } from 'near-api-js'
function Header() {
  // console.log(window.walletConnection.isSignedIn())
  const [isOpen, setIsOpen] = useState(false)
  const menuItem = [
    {
      name: 'Download',
      path: '/download',
      to: 'download',
    },
    {
      name: 'Products',
      path: '#',
      to: '#',
    },
    {
      name: 'Solutions',
      path: '#',
      to: '#',
    },
    {
      name: 'About Us',
      path: '#',
      to: '#',
    },
    {
      name: 'Contact',
      path: '#',
      to: '#',
    },
  ]
  const router = useRouter()

  return (
    <div>
      <nav className="container  z-10  w-full bg-[#FCFCFD] ">
        <div className="w-full">
          <div className="flex h-20 w-full items-center">
            <div className="mx-auto flex  w-full  items-center justify-between">
              <div className="flex flex-shrink-0 items-center justify-center ">
                <Link
                  // activeClass={item.name}
                  href="/"
                  // smooth={true}
                  // offset={50}
                  // duration={500}
                >
                  <h1 className=" flex cursor-pointer font-bold">
                    <Image src={Logo} alt="" className="w-full" />
                    <span className="mt-2 ml-2 text-2xl font-black">
                      Decentralnet<b className="text-[#FFCC00]">.</b>
                    </span>
                  </h1>
                </Link>

                <div className="hidden md:block">
                  <ul className={`ml-10 flex items-baseline space-x-4 `}>
                    {menuItem.map((item) => {
                      return (
                        <li
                          className={`${
                            router.asPath == item.path ? 'active' : ''
                          }`}
                        >
                          <Link href={item.to}>
                            <a className="text-md cursor-pointer px-3 py-2 font-semibold  hover:text-[#ffcc00]">
                              {' '}
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  {typeof window !== 'undefined' &&
                  window.walletConnection?.isSignedIn() ? (
                    <>
                      {' '}
                      <Link href="profile">
                        <p className=" mr-2 cursor-pointer text-center font-bold">
                          {window.accountId}
                        </p>
                      </Link>
                      |{' '}
                      <Button variant="danger" onClick={logout}>
                        <b>Disconnect</b>
                      </Button>
                    </>
                  ) : (
                    <Button variant="primary" onClick={login}>
                      <b>Connect Wallet</b>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none inline-flex items-center justify-center rounded-md bg-blue-600 p-2  text-white hover:bg-blue-600 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="space-y-1 bg-white px-2 pt-2 pb-3 sm:px-3"
              >
                {menuItem.map((item) => {
                  return (
                    <ul className="block cursor-pointer flex-col rounded-md px-3 py-2 text-base font-medium text-[#272E35] hover:bg-blue-600 hover:text-white">
                      <Link
                        // activeClass={item.name}
                        href={item.to}
                        // smooth={true}
                        // offset={50}
                        // duration={500}
                      >
                        <li
                          className={`${
                            router.asPath == item.path ? 'active' : ''
                          }`}
                        >
                          <a className="text-md cursor-pointer px-3 py-2 font-semibold  hover:text-[#ffcc00]">
                            {' '}
                            {item.name}
                          </a>
                        </li>
                      </Link>
                    </ul>
                  )
                })}
                {typeof window !== 'undefined' &&
                window.walletConnection?.isSignedIn() ? (
                  <div className="flex-col">
                    {' '}
                    <Link href="profile">
                      <p className=" mr-2 cursor-pointer px-3 py-3 font-bold">
                        {window.accountId}
                      </p>
                    </Link>
                    <div >   <Button variant="danger"  onClick={logout}>
                      <b>Disconnect</b>
                    </Button></div>
                 
                  </div>
                ) : (
                  <Button variant="primary" onClick={login}>
                    <b>Connect Wallet</b>
                  </Button>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Header
