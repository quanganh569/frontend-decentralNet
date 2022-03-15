import React from 'react'
import Device from './Device'
import ios from '/assets/imgs/ios.svg'
import macos from '/assets/imgs/macos.svg'
import android from '/assets/imgs/android.svg'
import windows from '/assets/imgs/windows.svg'
import desktop from '/assets/imgs/desktop.svg'

const DeviceLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="static m-3 text-3xl font-semibold	text-[#272E35]">
        Looking for
        <br />
        another device?
      </p>

        <div className="flex items-center justify-center">
          <Device
            icon={ios}
            deviceName={'DecentralNet for IOS'}
            type={'Mobile App'}
            link={''}
          />
          <div className="h-24 w-1 rounded bg-[#748FB5] opacity-20 "></div>

          <Device
            icon={macos}
            deviceName={'DecentralNet for Mac'}
            type={'Desktop App'}
            link={''}
          />
        </div>
        <div className="flex items-center justify-center">
          <Device
            icon={android}
            deviceName={'DecentralNet for Android'}
            type={'Mobile App'}
            link={''}
          />
          <div className="h-24 w-1 rounded bg-[#748FB5] opacity-20 "></div>
          <Device
            icon={desktop}
            deviceName={'DecentralNet on Web'}
            type={'Desktop App'}
            link={''}
          />
          <div className="hidden h-24 w-1 rounded bg-[#748FB5] opacity-20 sm:flex "></div>
          <div className="hidden sm:flex">
            <Device
              icon={windows}
              deviceName={'DecentralNet for Windows'}
              type={'Desktop App'}
              link={''}
            />
          </div>
        </div>
      <div className="flex sm:hidden">
        <Device
          icon={windows}
          deviceName={'DecentralNet for Windows'}
          type={'Desktop App'}
          link={''}
        />
      </div>
    </div>
  )
}

export default DeviceLayout
