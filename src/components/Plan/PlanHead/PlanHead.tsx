import React from 'react'
import { PlanHeadTypes } from '../../../types/types'

export default function PlanHead({monthly, yearly, time}: PlanHeadTypes) {
    return (
        <>
            <div>
                <h2 className='text-4xl text-white max-[1440px]:text-3xl max-[768px]:text-2xl'>Choose the plan that's right for you</h2>
                <p className='max-w-[1000px] text-lg text-[#999999] max-[1440px]:text-base max-[768px]:text-sm'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div className='w-[237px] h-[75px] bg-black p-[10px] flex items-center border-1 border-[#333333] rounded-md [&>button]:cursor-pointer max-[1440px]:w-[190px] max-[1440px]:h-[61px]'>
                <button className={`w-[118px] h-[55px] ${time === "monthly" ? "bg-[#1F1F1F] text-white" : "text-[#999999]"} text-lg  rounded-md max-[1440px]:w-[94px] max-[1440px]:h-[45px] max-[1440px]:text-base`} onClick={monthly}>Monthly</button>
                <button className={`w-[118px] h-[55px] ${time === "yearly" ? "bg-[#1F1F1F] text-white" : "text-[#999999]"} text-lg rounded-md max-[1440px]:w-[94px] max-[1440px]:h-[45px] max-[1440px]:text-base`} onClick={yearly}>Yearly</button>
            </div>
        </>
    )
}
