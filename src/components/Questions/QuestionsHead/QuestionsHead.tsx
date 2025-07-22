import React from 'react'

export default function QuestionsHead() {
    return (
        <>
            <div>
                <h2 className='text-4xl text-white max-[1440px]:text-3xl max-[768px]:text-2xl'>Frequently Asked Questions</h2>
                <p className='max-w-[1000px] text-lg text-[#999999] max-[1440px]:text-base max-[768px]:text-sm'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            <button className="bg-[#E50000] w-[176px] h-[63px] text-white text-xl rounded-md flex items-center justify-center gap-2 cursor-pointer duration-300 hover:bg-[#ff9999] max-[1440px]:w-[140px] max-[1440px]:h-[49px] max-[1440px]:text-sm">
                Ask a Questions
            </button>
        </>
    )
}
