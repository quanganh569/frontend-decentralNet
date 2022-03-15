import Image from 'next/image'
import React from 'react'
import blockChain from '../../assets/imgs/blockChain.png'
import lnIcon from '../../assets/imgs/lnIcon.png'
import securityIcon from '../../assets/social/securityIcon.png'
import nofeeIcon from '../../assets/social/nofeeIcon.png'
import featuresIcon from '../../assets/social/featuresIcon.png'
const WhyUseLayout = () => {
  const array = [
    {
      logo: securityIcon,
      title: 'Security',
      description:
        'NFT Domains are fully decentralized, they are safer than traditional domains. These domain are reinforced to protect you against privacy / DDoS attacks',
    },
    {
      logo: nofeeIcon,
      title: 'No domain fees',
      description:
        'NFT Domains are fully decentralized, they are safer than traditional domains. These domain are reinforced to protect you against privacy / DDoS attacks',
    },
    {
      logo: featuresIcon,
      title: 'More features',
      description:
        'Your NFT domain comes with awesome superpowers! Host a decentralized website, censorship resistance, better ownership, smoother crypto transactions,...',
    },
  ]
  return (
    <React.Fragment>
      {' '}
      <div className="my-20">
        <p className=" text-center text-[35px] font-bold ">
          Why are blockchain domains created
        </p>
        <div className="container mx-40 my-10 grid grid-cols-2 gap-4">
          <div>
            <Image src={blockChain} />
          </div>
          <div className="px-10">
            {/* <div>
              {' '}
              <Image src={lnIcon} alt="xxx" />
            </div> */}

            <p className="pt-10 text-[25px]">
              Blockchain domains are more convenient
              <br /> to use for transactions
            </p>
            <p className="pt-10 text-[25px]">
              NFT domains can’t be blocked or <br /> censored. Blockchain-based
              domains
              <br />
              legally belong to their owners.
              <br /> The domain is your asset. As the sole owner,
              <br /> you have complete control over it.
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[650px] bg-[#E8E8E8] py-20">
        <p className=" pb-10 text-center text-[35px] font-bold">
          What are the advantages to use a blockchain domain?
        </p>
        <div className="container my-10 grid grid-cols-3 gap-4">
          {array.map((item) => {
            return (
              <div className="mx-auto h-[350px] w-[290px] rounded-lg border-2 border-[#A68A8A] bg-white shadow-2xl">
                <div className="... mt-[20%] flex flex-col">
                  <div className="mx-auto">
                    <Image src={item.logo} />
                  </div>
                  <div className="mx-auto">
                    <p className="text-[30px] font-bold">{item.title}</p>
                  </div>
                  <div className="mx-auto px-10 text-center">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhyUseLayout
