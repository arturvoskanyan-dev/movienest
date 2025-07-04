import React from 'react'
import {QuestionsHead, QuestionsBox} from "../index"

export default function Questions() {
    const questionsArr = [
        [
            {
                id: 1,
                title: "What is StreamVibe?",
            },
            {
                id: 2,
                title: "What is StreamVibe?",
            },
            {
                id: 3,
                title: "What is StreamVibe?",
            },
            {
                id: 4,
                title: "What is StreamVibe?",
            },
        ],
        [
            {
                id: 5,
                title: "What is StreamVibe?",
            },
            {
                id: 6,
                title: "What is StreamVibe?",
            },
            {
                id: 7,
                title: "What is StreamVibe?",
            },
            {
                id: 8,
                title: "What is StreamVibe?",
            },
        ]
    ];

    return (
        <section className='max-w-[1440px] mx-auto pb-40 px-12 flex flex-col gap-12'>
            <div className='flex justify-between items-center'>
                <QuestionsHead />
            </div>
            <div className='flex justify-between gap-[80px] px-12'>
                <QuestionsBox questions={questionsArr[0]} />
                <QuestionsBox questions={questionsArr[1]} />
            </div>
        </section>
    )
}