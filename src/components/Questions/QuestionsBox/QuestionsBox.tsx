import React from 'react'
import QuestionItem from '../QuestionItem/QuestionItem'

export default function QuestionsBox({questions}: any) {
    return (
        <div className='w-[558px] h-[556px]'>
            {questions.map((question: any) => <QuestionItem key={question.id} question={question} />)}
        </div>
    )
}
