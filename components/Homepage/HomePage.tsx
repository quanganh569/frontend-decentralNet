import React from 'react'
import bannerImg from '../../assets/imgs/HomePage.png'
import Image from 'next/image'
import Button from '../../commons/Button'
import logoTeam02 from '../../assets/teamlogo/02.png'
import logoTeam01 from '../../assets/teamlogo/01.png'
import logoTeam03 from '../../assets/teamlogo/03.png'
import travelImage from '../../assets/imgs/travel.png'
import HeroLayout from './Hero'
import ProductsLayout from './Products'
const HomePage = () => {
  return (
    <React.Fragment>
      <div className="container flex items-center justify-between md:flex">
        <div className=" ">
          <p className="text-md py-10 font-bold md:text-6xl ">
            Decentralized <br />
            Network <br />
            Powered by People
          </p>
          <p>
            A dapp enables secure decentralized networks for web3.
            <br /> Powered by the NEAR Protocol, DecentralNet enables
            decentralized infrastructure with share to earn economic..
          </p>
          <div className="flex py-5">
            <Button variant="primary">
              <b>Download</b>
            </Button>
            <Button variant="secondary">
              <b>Watch how it works</b>
            </Button>
          </div>
        </div>
        <div className=" ">
          <Image
            // loader={bannerImg}
            src={bannerImg}
            alt="Picture of the author"
          />
        </div>
      </div>

      {/* <div className="d-flex items-center justify-between">
        <p className="text-center">
          Thousands of teams worldwide are using Solo
        </p>
      </div>

      <div className="flex items-center justify-between  ">
        <ul className="mx-auto flex py-5">
          <li className="px-10">
            <Image src={logoTeam02} width={160} height={64} />
          </li>
          <li className="px-10">
            {' '}
            <Image src={logoTeam01} width={160} height={64} />
          </li>
          <li className="px-10">
            {' '}
            <Image
              className="responsive"
              src={logoTeam03}
              width={160}
              height={64}
            />
          </li>
          <li className="px-10">
            {' '}
            <Image src={logoTeam02} width={160} height={64} />
          </li>
          <li className="px-10">
            {' '}
            <Image src={logoTeam01} width={160} height={64} />
          </li>
          <li className="px-10">
            {' '}
            <Image src={logoTeam03} width={160} height={64} />
          </li>
        </ul>
      </div> */}
      {/* HeroLayout */}
      <HeroLayout />
      {/* ProductsLayout */}
      <ProductsLayout />
    </React.Fragment>
  )
}

export default HomePage
