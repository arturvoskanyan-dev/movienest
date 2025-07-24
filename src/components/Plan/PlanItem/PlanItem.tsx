import React from 'react'
import { PlanTypes } from '../../../types/types'

export default function PlanItem({ plan }: {plan: PlanTypes}) {
    return (
        <div className='w-[512px] h-[425px] p-[50px] border-1 border-[#333333] rounded-md bg-[#1A1A1A]'>
            <div className='flex flex-col gap-4'>
                <h4 className='text-2xl text-white font-bold'>{plan.title}</h4>
                <p className='text-lg text-[#999999]'>{plan.info}</p>
            </div>
            <div className='flex items-baseline-last py-[50px]'>
                <h3 className='text-[40px] text-white font-semibold'>${plan.price}</h3>
                <span className='text-lg text-[#999999]'>/month</span>
            </div>
            <div className='w-[312px] h-[63px] flex items-center gap-2'>
                <button className='w-[196px] h-[63px] bg-[#141414] border-1 border-[#333333] text-lg text-white rounded-md cursor-pointer'>Start Free Trial</button>
                <button className='w-[196px] h-[63px] bg-[#E50000] text-lg text-white rounded-md cursor-pointer'>Choose Plan</button>
            </div>
        </div>
    )
}
