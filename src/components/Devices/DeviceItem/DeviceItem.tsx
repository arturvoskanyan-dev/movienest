import React from 'react'

export default function DeviceItem({device} : any) {
    return (
        <div className='element w-[432px] h-[283px] border-2 border-[#262626] p-[50px] flex flex-wrap gap-6 rounded-md max-[1440px]:w-[312px] max-[1370]:h-[230px] max-[1440px]:p-[40px] max-[768px]:w-[212px max-[1440px]:h-[175px]] max-[768px]:p-[24px]'>
            <div className='flex items-center gap-4'>
                <img src={device.img} className='p-[16px] w-[72px] h-[72px] bg-[#141414] rounded-xl max-[1440px]:w-[54px] max-[1440px]:h-[54px]' />
                <h3 className='text-2xl text-white max-[1440px]:text-xl max-[768px]:text-lg'>{device.title}</h3>
            </div>
            <p className='text-[#999999] max-[320px]:text-xs'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
        </div>
    )
}
