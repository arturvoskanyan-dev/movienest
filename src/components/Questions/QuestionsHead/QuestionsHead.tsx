import React from 'react'

export default function QuestionsHead() {
    return (
        <>
            <div>
                <h2 className='text-2xl text-white'>Frequently Asked Questions</h2>
                <p className='max-w-[1000px] text-[#999999]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            <button className='w-[176px] h-[63px] bg-[#E50000] text-[18px] text-white rounded-md cursor-pointer'>
                Ask a Questions
            </button>
        </>
    )
}
