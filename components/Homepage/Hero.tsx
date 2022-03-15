import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import travelImage from '../../assets/imgs/travel.png'
import Button from '../../commons/Button'
const HeroLayout = () => {
  return (
    <React.Fragment>
      <div className="bg-linear-yellow relative bottom-[-5rem] right-0 z-20 mx-20 rounded-t-[24px] rounded-b-[12px] ">
        <div className=" absolute z-50  my-10 flex h-[650px] rounded-[24px] bg-gradient-to-r  from-indigo-500 to-black md:relative md:flex-col">
          <div className="md:ml-[55%] md:mt-[13%]">
            <p className="z-30 mx-auto text-6xl  font-bold text-white ">
              Decentralize Website<br />
              {/* together */}
            </p>
            <p className="my-5  text-sm text-[#6A7986] ">
            Just invite your team, Decetralnet does all the heavy-lifting.
            </p>
            <Link href="domains">
              <p className="button-schedule w-48 cursor-pointer text-center">Buy NFT Domain</p>
            </Link>
          </div>

          <div className="... md:absolute md:bottom-[2rem] md:left-[-13rem]">
            <Image src={travelImage} width={1048} height={745} />
          </div>
        </div>
        <div className=" flex grid grid-cols-3 divide-x">
          <div className="flex items-center justify-between p-5">
            {/* <div className="m-5 text-center text-5xl font-bold">100+</div> */}
            <div className="mx-auto">
              <p className="m-5 text-center text-5xl font-bold">100+</p>
              <Button className="px-5" variant="support">
                Countries Support
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-5">
            {/* <div className="m-5 text-center text-5xl font-bold">100+</div> */}
            <div className="mx-auto">
              <p className="m-5 text-center text-5xl font-bold">28m</p>
              <Button className="px-5" variant="support">
                Downloads on App Store
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-5">
            {/* <div className="m-5 text-center text-5xl font-bold">100+</div> */}
            <div className="mx-auto">
              <p className="m-5 text-center text-5xl font-bold">16m</p>
              <Button className="px-5" variant="support">
                Verified Users
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroLayout
