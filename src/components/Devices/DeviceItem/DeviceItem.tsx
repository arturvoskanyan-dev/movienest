import React from 'react'

export default function DeviceItem({device} : any) {
    return (
        <div className='element w-[412px] h-[283px] border-2 border-[#262626] p-[50px] flex flex-wrap gap-6 rounded-md'>
            <div className='flex items-center gap-4'>
                <img src={device.img} className='p-[16px] w-[72px] h-[72px] bg-[#141414] rounded-xl' />
                <h3 className='text-2xl text-white'>{device.title}</h3>
            </div>
            <p className='text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
        </div>
    )
}
