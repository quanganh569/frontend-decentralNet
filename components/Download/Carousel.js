import React, { useState } from "react";
import Review from './Review'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ArrowNarrowRightIcon, ArrowNarrowLeftIcon } from "@heroicons/react/outline";


const Carousel = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const reviews = [
        {
            review: "Solo makes life easier to me. With Solo you can organize your work and life in seconds. 5 stars!!!",
            author: "Jaida Barton",
            work: "Visual Designer at UI8",
            stars: 5
        },
        {
            review: "Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..",
            author: "Jedidiah Cassin",
            work: "via. Google Play",
            stars: 5
        },
        {
            review: "I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!",
            author: "Jaida Barton",
            work: 'Visual Designer at UI8',
            stars: 5
        },
        {
            review: "Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..",
            author: "Jedidiah Cassin",
            work: "via. Google Play",
            stars: 5
        },

    ]

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="w-full xl:w-3/5 sm:p-20 p-10">
                <p className="static m-3 text-3xl font-semibold	text-[#272E35]">
                    What people are
                    <br />
                    saying
                </p>
                <Swiper
                    onSwiper={setSwiperRef}
                    loop={true}
                    // slidesPerView={3}
                    spaceBetween={0}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {reviews.map((r, index) => (
                        <SwiperSlide
                            id={index}
                        >
                            <Review
                                review={r.review}
                                author={r.author}
                                work={r.work}
                                stars={r.stars}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="m-5"
                    onClick={() => { swiperRef.slidePrev() }} >
                    <ArrowNarrowLeftIcon strokeWidth={1} className="h-12 w-12" />
                </button>
                <button
                    className="m-5"
                    onClick={() => { swiperRef.slideNext() }}>
                    <ArrowNarrowRightIcon strokeWidth={1} className="h-12 w-12" />
                </button>
            </div>
        </div>
    )
}

export default Carousel
