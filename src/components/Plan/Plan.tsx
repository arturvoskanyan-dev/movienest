import React, { useState } from 'react'
import PlanHead from './PlanHead/PlanHead'
import PlanSection from './PlanSection/PlanSection'

export default function Plan() {
    const [time, setTime] = useState<string>("monthly");

    const monthly = () => setTime("monthly");
    const yearly = () => setTime("yearly");

    return (
        <section className='max-w-[1440px] mx-auto pb-40 px-12 flex flex-col gap-12 max-[768px]:px-6'>
            <div className='flex justify-between items-center gap-4 max-[768px]:flex-wrap max-[768px]:px-2'>
                <PlanHead monthly={monthly} yearly={yearly} time={time} />
            </div>
            <div className='flex justify-between gap-4 max-[1231px]:flex-wrap'>
                <PlanSection time={time} />
            </div>
        </section>
    )
}
