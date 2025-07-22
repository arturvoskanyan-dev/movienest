import React from 'react'
import { QuestionsType } from '../../../types/types'

export default function QuestionItem({ question, toggle }: { question: QuestionsType, toggle: (id: number) => void }) {
    return (
        <div className={`p-[12px] ${question.id !== 4 && question.id !== 8 ? "border-b-2 border-[#E50000]" : ""}`}>
            <div className={`flex justify-between items-center gap-6`}>
                <div className='w-[62px] h-[67px] p-[20px] bg-[#1F1F1F] text-xl text-white rounded-xl max-[1440px]:w-[50px] max-[1440px]:h-[54px] max-[1440px]:p-[16px] max-[1440px]:text-base max-[768px]:w-[42px] max-[768px]:h-[46px] max-[768px]:p-[12px]'>
                    0{question.id}
                </div>
                <div className='flex flex-col justify-center gap-[20px] w-[558px] h-[107px]'>
                    <h3 className='text-[22px] text-white max-[1440px]:text-xl max-[768px]:text-lg'>{question.title}</h3>
                </div>
                <button
                    className='text-white text-[30px] cursor-pointer max-[1440px]:text-2xl'
                    onClick={() => toggle(question.id)}>
                    {question.isOpen ? "-" : "+"}
                </button>
            </div>
            {
                question.isOpen &&
                <div className='pl-22 pb-4 max-[1021px]:pl-12'>
                    <h3 className='text-lg text-[#999999] max-[1440px]:text-base max-[768px]:text-sm'>{question.answer}</h3>
                </div>
            }
        </div>
    )
}
