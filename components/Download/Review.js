import React from 'react'
import Image from 'next/image'
import star from '/assets/imgs/star.svg'


const Review = ({ review, author, work, stars }) => {
    return (
        <div className=" p-5">
            <div
                className="flex flex-col items-center justify-center text-center"
            >
                <div className="w-2/3 m-2">
                </div>
                <p className="static h-44 w-48 text-base m-1 font-semibold text-[#272E35]">
                    {'“ '}{review}{' ”'}
                </p>
                <div className="flex">
                    {[...Array(stars)].map(() => (
                        <div className="m-2 w-5">
                            <Image src={star} alt="" />
                        </div>
                    )
                    )}
                </div>
                <p className="static text-base m-1 font-semibold text-[#272E35]">
                    {author}
                </p>
                <p className="static text-xs text-[#6E757C]">
                    {work}
                </p>
            </div>
        </div>
    )
}

export default Review