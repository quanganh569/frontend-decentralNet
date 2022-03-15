import React from 'react'
import Image from 'next/image'

const Device = (
    { icon, deviceName, type, link }
) => {
    return (
        <div className="w-36 sm:w-48 sm:p-6 m-4">
            <a
                href={link}
                className="flex flex-col items-center justify-center text-center"
            >
                <div className="w-2/3 m-2">
                    <Image src={icon} alt="" />
                </div>
                <p className="static text-base m-1 font-semibold text-[#272E35]">
                    {deviceName}
                </p>
                <p className="static text-xs font-semibold text-[#6E757C]">
                    {type}
                </p>
            </a>
        </div>
    )
}

export default Device