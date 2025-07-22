import React from 'react'
import {QuestionsHead, QuestionsBox} from "../index"

export default function Questions() {
    const questionsArr = [
        [
            {
                id: 1,
                isOpen: false,
                title: "What is StreamVibe?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
            {
                id: 2,
                isOpen: false,
                title: "How much does StreamVibe cost?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
            {
                id: 3,
                isOpen: false,
                title: "What content is available on StreamVibe?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
            {
                id: 4,
                isOpen: false,
                title: "How can I watch StreamVibe?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
        ],
        [
            {
                id: 5,
                isOpen: false,
                title: "How do I sign up for StreamVibe?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
            {
                id: 6,
                isOpen: false,
                title: "What is the StreamVibe free trial?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
            {
                id: 7,
                isOpen: false,
                title: "How do I contact StreamVibe customer support?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
            {
                id: 8,
                isOpen: false,
                title: "What are the StreamVibe payment methods?",
                answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            },
        ]
    ];

    return (
        <section className='max-w-[1440px] mx-auto pb-40 px-12 flex flex-col gap-12 max-[768px]:px-2'>
            <div className='flex justify-between items-center gap-4 max-[768px]:flex-wrap max-[768px]:px-6'>
                <QuestionsHead />
            </div>
            <div className='flex justify-between gap-[80px] px-12 max-[1440px]:px-6 max-[1021px]:flex-wrap max-[768px]:px-4'>
                <QuestionsBox questions={questionsArr[0]} />
                <QuestionsBox questions={questionsArr[1]} /> 
            </div>
        </section>
    )
}