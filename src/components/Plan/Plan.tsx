import React from 'react'
import PlanHead from './PlanHead/PlanHead'
import PlanSection from './PlanSection/PlanSection'

export default function Plan() {
    return (
        <section className='max-w-[1440px] mx-auto pb-40 px-12 flex flex-col gap-12 max-[768px]:px-2'>
            <div className='flex justify-between items-center gap-4 max-[768px]:flex-wrap max-[768px]:px-6'>
                <PlanHead />
            </div>
            <div className='flex justify-between gap-4'>
                <PlanSection />
            </div>
        </section>
    )
}
