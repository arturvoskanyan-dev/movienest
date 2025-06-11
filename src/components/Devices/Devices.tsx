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
                <h2 className="text-2xl text-white">We Provide you streaming experience across various devices.</h2>
                <p className='max-w-[1000px] text-[#999999]'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>
            <div className='flex flex-wrap gap-6'>
                {devicesArr.map((device, i) => <DeviceItem key={i} device={device} />)}
            </div>
        </section>
    )
}