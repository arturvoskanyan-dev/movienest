import React from 'react'
import { PlanTypes } from '../../../types/types'

export default function PlanItem({ plan, time }: {plan: PlanTypes, time: string}) {
    return (
        <div className='w-[512px] h-[425px] p-[50px] border-1 border-[#333333] rounded-md bg-[#1A1A1A] max-[1440px]:w-[413px] max-[1440px]:h-[345px] max-[1440px]:p-[40px] max-[768px]:w-[258px] max-[768px]:h-[275px] max-[768px]:p-[24px]'>
            <div className='flex flex-col gap-4'>
                <h4 className='text-2xl text-white font-bold max-[1440px]:text-xl max-[768px]:text-lg'>{plan.title}</h4>
                <p className='text-lg text-[#999999] max-[1440px]:text-base max-[768px]:text-sm'>{plan.info}</p>
            </div>
            <div className='flex items-baseline-last py-[50px] max-[1440px]:py-[30px] max-[768px]:py-[15px]'>
                <h3 className='text-[40px] text-white font-semibold mxa-[1440px]:text-[30px] max-[768px]:text-2xl'>${time !== "yearly" ? plan.price : Math.round(plan.price * 11) + 0.99}</h3>
                <span className='text-lg text-[#999999] max-[1440px]:text-base max-[768px]:text-sm'>/{time === "monthly" ? "month" : "yearly"}</span>
            </div>
            <div className='w-[312px] h-[63px] flex items-center gap-2 max-[1440px]:w-[212px] max-[1440px]:h-[49px]'>
                <button className={`w-[196px] h-[63px] bg-[#141414] border-1 border-[#333333] text-lg text-white rounded-md cursor-pointer max-[1440px]:w-[160px] max-[1440px]:h-[49px] max-[1440px]:text-sm`}>Start Free Trial</button>
                <button className='w-[196px] h-[63px] bg-[#E50000] text-lg text-white rounded-md cursor-pointer max-[1440px]:w-[160px] max-[1440px]:h-[49px] max-[1440px]:text-sm'>Choose Plan</button>
            </div>
        </div>
    )
}
