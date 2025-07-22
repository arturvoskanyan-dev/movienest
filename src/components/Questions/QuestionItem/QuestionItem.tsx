import React from 'react'
import { QuestionsType } from '../../../types/types'

export default function QuestionItem({question, toggle}: {question: QuestionsType, toggle: (id: number) => void}) {
    return (
        <div className={`p-[16px] flex justify-between items-center gap-6 ${question.id !== 4 && question.id !== 8 ? "border-b-2 border-[#E50000]" : ""}`}>
            <div className='w-[62px] h-[67px] p-[20px] bg-[#1F1F1F] text-white rounded-xl'>
                0{question.id}
            </div>
            <div className='flex flex-col justify-center gap-[20px] w-[558px] h-[107px]'>
                <h3 className='text-white text-[22px]'>{question.title}</h3>
            </div>
            {
                question.isOpen && 
                <div>
                    <h3 className='text-white'>{question.title}</h3>
                </div>
            }
            <button className='text-white text-[30px] cursor-pointer' onClick={() => toggle(question.id)}>
                {question.isOpen ? "-" : "+"}
            </button>
        </div>
    )
}
