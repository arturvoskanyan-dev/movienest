import React, { useState } from 'react'
import QuestionItem from '../QuestionItem/QuestionItem'
import { QuestionsType } from '../../../types/types';

export default function QuestionsBox({ questions }: { questions: Array<QuestionsType> }) {
    const [newQuestions, setNewQuestion] = useState(questions)

    const toggle = (id: number) => {
        setNewQuestion(newQuestions.map((question: QuestionsType) => {
            if (question.id === id) {
                return {
                    ...question,
                    isOpen: !question.isOpen
                };
            }
            return question;
        }));
    }

    return (
        <div className='w-[558px] h-[556px]'>
            {newQuestions.map((question: QuestionsType) => <QuestionItem key={question.id} question={question} toggle={toggle} />)}
        </div>
    )
}
