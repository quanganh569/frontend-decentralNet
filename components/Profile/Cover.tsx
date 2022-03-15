import Image from 'next/image'
import React from 'react'
import Button from '../../commons/Button'
import ProfileCard from './ProfileCard'
import cover_image from '/assets/imgs/cover-image.png'
import avatar from '/assets/imgs/avatar.png'
import { PhotographIcon, PencilAltIcon } from '@heroicons/react/outline'

const Cover = () => {
  return (
    <div>
      <div className="relative flex flex-col">
        <div className="h-80">
          <Image src={cover_image} alt="cover" layout="fill" />
        </div>
        <div className="absolute right-0 bottom-0 mb-10 mr-40 flex flex-col items-center justify-center sm:flex-row">
          <Button variant="profile" padding="py-2 px-4">
            <p className="mr-3 font-normal text-white">Edit cover photo</p>
            <PhotographIcon className="h-6 w-6 text-white" />
          </Button>
          <Button variant="profile" padding="py-2 px-4">
            <p className="mr-3 font-normal text-white">Edit profile</p>
            <PencilAltIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
        <div className="absolute top-3/4 flex w-1/4 flex-col items-center justify-center">
          <ProfileCard
            avatar={avatar}
            name={'Enrico Cole'}
            walletAddress={'0xc4c16a645...b21a'}
            description={
              'A wholesome farm owner in Montana. Upcoming gallery DecentralNet show in Germany'
            }
            website={'https://ui8.net'}
            joinDate={'Mar 15, 2021'}
          />
        </div>
      </div>
    </div>
  )
}

export default Cover
