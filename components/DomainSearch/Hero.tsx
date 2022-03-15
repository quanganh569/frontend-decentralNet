import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ModalMintNFT from '../../commons/Modal'
import ModalSuccess from '../../commons/ModalSuccess'
import axios from 'axios'
import { login } from '../../config/nearUtils'
import {
  CheckCircleIcon,
  BanIcon,
  ClipboardCheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline'

import Button from '../../commons/Button'
import { utils } from 'near-api-js'
import { useRouter } from 'next/router'

const HeroLayout = () => {
  const [like, setLike] = useState(true)
  const handleLike = () => {
    setLike(!like)
  }
  let params = useRouter()

  console.log(params.asPath === '/searchDomain')

  const [mintVisible, setMintVisible] = useState(false)
  const [domainList, setDomainList] = useState([])

  const [status, setStatus] = useState(true)

  const handleClickMint = (item: any) => {
    if (window.walletConnection.isSignedIn()) {
      setTokenId(item.domain)
      setMintVisible(true)
    } else {
      login()
    }
  }
  const [tokenId, setTokenId] = useState('')
  const getListArray = () => {
    axios.get(`https://decentralnet.xyz/api/domain/search?q=manhkhoa168`).then(
      (success) => {
        setDomainList(success.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(() => {
    getListArray()
  }, [])

  const array = [
    {
      domain: '.x',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.crypto',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.coin',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.wallet',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.bitcoin',
      icon: <BanIcon className="w-6 w-6" />,
      price: '',
    },
    {
      domain: '.888',
      icon: <BanIcon className="w-6 w-6 " />,
      price: '',
    },
    {
      domain: '.crypto',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.crypto',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.crypto',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '100.000 USD',
    },
    {
      domain: '.blockchain',
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      price: '',
    },
  ]

  async function submitOnMint(data: any) {
    // console.log(tokenId)
    axios
      .post(`https://decentralnet.xyz/api/domain/mint`, {
        domain: tokenId,
      })
      .then((success) => {
        getListArray()
      })
    // call NFT contract mint_token
    if (tokenId) {
      try {
        await (window as any).contractNFT.nft_mint(
          {
            token_id: tokenId,
            receiver_id: window.accountId,
            metadata: {
              title: tokenId,
              description: tokenId,
              media: tokenId,
            },
          },

          30000000000000,
          utils.format.parseNearAmount('0.1')
        )
      } catch (e) {
        console.log('Error: ', e)
      }
    }
  }
  const arraySuggestName = [
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
    {
      icon: <CheckCircleIcon className="w-6 w-6 text-[#209A0C]" />,
      name: '888.x',
      price: '100.000USD',
    },
  ]
  return (
    <div>
      <div className=" bg-[#FCFCFD] shadow-lg">
        <div className="container mx-auto px-20 ">
          <ul className="flex">
            <li className="border-b-2 border-[#3430F3] px-[2em] py-8 font-bold">
              Domain Search
            </li>
            <li className="px-[2em] py-8">Premium Search</li>
            <li className="px-[2em] py-8">Refer Friend</li>
          </ul>
        </div>
      </div>

      <div className="relative my-10 px-20">
        {' '}
        <input
          className="h-[70px] w-full rounded-[40px] pl-20 shadow-2xl "
          type="text"
          placeholder="manhkhoa168"
        />
        <div className="absolute right-[3em] bottom-0 ">
          <p className="button-domain flex h-[70px] w-[285px]  cursor-pointer rounded-[40px] bg-[#2048D9] text-white">
            <span className=" mx-auto text-lg font-bold ">Search</span>
          </p>
        </div>
      </div>

      <div className="py-10 md:container md:mx-auto">
        <p className="text-[20px] font-bold">Ending for "DecentralNet"</p>
      </div>

      <div className="container mx-auto my-5 grid grid-cols-3 gap-4">
        <div className="... col-span-2 flex w-full flex-wrap rounded-[10px]  py-10 ">
          {/* <div className="flex flex-row flex-wrap  p-4">
            {array.map((item) => {
              return (
                <div className="w-full border bg-white p-2 pt-[2em] text-center shadow-lg xl:w-1/5">
                  <p className="font-bold">{item.domain}</p>
                  <div className="flex justify-center ">
                    {item.icon}
                    <span>{item.price}</span>
                  </div>
                </div>
              )
            })}
          </div> */}

          {/* <div className="mx-5 my-10 flex w-full border-2 px-5 py-5 shadow-lg">
            <div className="mr-auto px-5">
              <p className="m-2 px-7">888.x</p>
              <div className="flex">
                <CheckCircleIcon className="mr-2 w-6 w-6 text-[#209A0C]" />
                <span className="inline-flex items-center justify-center rounded bg-green-500 px-2 py-1 text-xs font-bold uppercase leading-none text-indigo-100">
                  Available
                </span>
              </div>
            </div>

            <div className="m-3  ml-auto flex px-5 ">
              <span className="mt-2 flex px-5">
                <b className="mr-2">100.000 USD</b>{' '}
                <div className="">
                  {' '}
                  {like ? (
                    <HeartIconSolid className="h-6 w-6" onClick={handleLike} />
                  ) : (
                    <HeartIconOutline
                      className="h-6 w-6"
                      onClick={handleLike}
                    />
                  )}
                </div>
              </span>
              <Button variant="cart">
                <span>
                  {' '}
                  <ClipboardCheckIcon className="mr-2 w-6 w-6 font-bold" />
                </span>
                Premium
              </Button>
            </div>
          </div> */}

          {/* <div className="mx-5 my-5 flex w-full border-t-4 px-5 "> </div> */}
          <div className="mx-5 mt-5 flex w-full   ">
            <div className="mr-auto">
              <b className="text-[20px]">Suggested names</b>
            </div>
            <div className="ml-auto flex">
              <b className="mr-2 text-[20px]">Ending: All</b>{' '}
              <ChevronDownIcon className="h-6 w-6 font-bold" />
            </div>
          </div>

          <div className="flex w-full flex-row flex-wrap  p-4">
            {domainList.length > 0 &&
              domainList.map((item: any) => {
                return (
                  <div className="flex w-full border-2 p-2 ">
                    <div className=" m-3 mr-auto px-5">
                      <div className="mt-2 flex">
                        {/* <span className="mr-2">{item.icon}</span> */}
                        <span className="font-bold">{item.domain}</span>
                      </div>
                    </div>

                    <div className="m-3  ml-auto flex px-5 ">
                      <span className="mt-2 flex px-5">
                        {/* <b className="mr-2">{item.price} usd</b>{' '} */}
                        <div className="">
                          {' '}
                          {like ? (
                            <HeartIconSolid
                              className="h-6 w-6"
                              onClick={handleLike}
                            />
                          ) : (
                            <HeartIconOutline
                              className="h-6 w-6"
                              onClick={handleLike}
                            />
                          )}
                        </div>
                      </span>
                      {item.availability ? (
                        <Button
                          variant="cart"
                          onClick={() => {
                            handleClickMint(item)
                          }}
                        >
                          <span>
                            {' '}
                            <ClipboardCheckIcon className="mr-2 w-6 w-6 font-bold" />
                          </span>
                          Mint token
                        </Button>
                      ) : (
                        <span className="mr-2 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                          Already Exist
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="w-full text-center">
          <div className="mb-5 w-full rounded-[15px] border-2 bg-gray-200 py-5">
            Continue to card
          </div>
          <div className="mb-5 w-full rounded-[15px] border-2 bg-[#9CBEFF] p-5">
            All domain purchases are a one-time payment. Unstoppable Domains
            have no renewal fees.
          </div>
          <div className="mb-5 w-full rounded-[15px] border-2 bg-[#9CBEFF] p-5">
            Adding a domain to your cart does not prevent others from buying
            that domain.
          </div>
        </div>
      </div>
      <ModalMintNFT
        visible={mintVisible}
        handleOk={submitOnMint}
        tokenId={tokenId}
        handleCancel={() => setMintVisible(false)}
      />
      {params.asPath !== '/searchDomain' && <ModalSuccess tokenId={tokenId} />}
    </div>
  )
}

export default HeroLayout
