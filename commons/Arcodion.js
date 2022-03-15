import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item border-t-[0.5px] border-t-[1px] border-[#D6BDBD] py-5">
      <div
        className="accordion-title flex"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <p className="text-[30px] font-bold text-white">{title}</p>
        </div>
        <div className="ml-auto text-[30px] font-bold text-white">
          {isActive ? '-' : '+'}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content pt-5">
          <p className="text-[16px] text-white py-5 px-3">{content}</p>
        </div>
      )}
    </div>
  )
}

export default Accordion
