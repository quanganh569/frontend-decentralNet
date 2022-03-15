import React from 'react'
import Accordion from '../../commons/Arcodion'
const FAQLayout = () => {
  const accordionData = [
    {
      title: 'What is an NFT Domain',
      content: `NFT domains are domains that live on a public blockchain and give users complete ownership of their stored data. The main benefits to owning one are simplifying crypto transactions by replacing wallet addresses with the domain name and easily creating and hosting websites on web3.`,
    },
    {
      title: 'What is the domain naming rule?',
      content: `Domains can contain the English-language letters a-z, and the digits 0-9.
      Hyphens can also be used but it can not be used at the beginning and at the end of a domain name. Two hyphens together is usually not permitted and also hyphens cannot appear at both third and fourth positions.
      Spaces and special characters (such as !, $, &, _ and so on) are not permitted.
      The minimum length is 3 and the maximum length is 63 characters (excluding extension ".gov.in").
      Domain names are not case-sensitive.(i.e. you may use a mix of upper or lower case letters)`,
    },
    {
      title: 'What is the difference between domain and hosting?',
      content: `Ten domains are like addresses and web hosting is an actual data storage service of the website, it's like the house you live in. If you want to launch a website you will need both, a domain name to help other people find your website and hosting, which helps to store website data.

      Domain names and web hosting have a symbiotic relationship. Technically it's possible to have one without the other, but it works best when working together, that's why many domain name registrars sell hosting and conversely, many web hosts sell domain names. domain.`,
    },
    {
      title: 'Characteristics of NFT’s include',
      content: `Each non-fungible token has a unique identifier
      Each token has a creator and an owner. It’s easy to verify yourself as a creator or owner.
      NFTs are not interchangeable with other tokens. Each is completely unique.
      NFTs are based on Ethereum.
      They can be sold in an NFT marketplace like Ethereum or sold consumer to consumer.`,
    },
    {
      title: 'Do NFT domains work in browsers like Chrome & Firefox?',
      content: `Yes, 
      .crypto
      domain names can resolve in Chrome & Firefox with a single setting change. Some browsers, like Opera for Android, already natively resolve NFT domain names by default.`,
    },
    {
      title: 'What is DNS?',
      content: `DNS stands for the phrase Domain Name System, which has the full meaning of the domain name resolution system. In the most succinct way, DNS is basically a system of converting the website domain names we are using, in the form of www.tenmien.com to a digital IP address corresponding to that domain name and vice versa. .

      DNS helps link network devices together for the purpose of locating and assigning a specific address to information on the Internet.`,
    },
    {
      title: 'What are the best ways to buy domain names?',
      content: `Checking a domain name is not simply checking if someone owns a domain name. You need to research and follow common standards to find the most suitable domain name.

      Length. As short as possible, 2 or 3 words is ideal.
      Simple. Do not use words that are too long or difficult to read, it will cause trouble for visitors.
      Key word. Add keywords of your niche. For example, if you want to sell coffee beans in Saigon, then try saigoncaphe.com
      Avoid using numbers. Numbers are hard to remember and make domain names more complicated.
      Brand name. Buying a branded domain name will maximize your brand awareness.`,
    },
  ]
  return (
    <div className=" bg-gradient-to-r from-[#1286F0] via-[#502DB1] to-[#7CBCF8]">
      <p className=" pt-20 text-center text-[35px] font-bold text-white">FAQ</p>
      <div className="accordion container mt-10 px-20">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQLayout
