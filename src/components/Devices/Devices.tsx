import React from 'react'
import { mobile, tablet, smart_tv, laptop, gaming, vr, DeviceItem } from "../index";

export default function Devices() {
    const devicesArr = [
        { title: "Smartphones", img: mobile },
        { title: "Tablet", img: tablet },
        { title: "Smart TV", img: smart_tv },
        { title: "Laptops", img: laptop },
        { title: "Gaming Consoles", img: gaming },
        { title: "VR Headsets", img: vr }
    ];

    return (
        <section className='max-w-[1440px] mx-auto pb-40 px-12 flex flex-col gap-12'>
            <div>
                <h2 className="text-4xl text-white max-[1440px]:text-3xl max-[768px]:text-2xl">We Provide you streaming experience across various devices.</h2>
                <p className='max-w-[1200px] text-[#999999] text-lg leading-8 max-[1440px]:text-base max-[768px]:text-sm max-[768px]:leading-5'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>
            <div className='flex justify-center flex-wrap gap-6 max-[768px]:justify-start'>
                {devicesArr.map((device, i) => <DeviceItem key={i} device={device} />)}
            </div>
        </section>
    )
}