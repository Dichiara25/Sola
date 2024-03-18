import PodcastPicture from "@/app/assets/podcast.png"
import heroStyles from './Hero.module.css'
import bodyStyles from '../Body.module.css'
import Image from 'next/image'
import { useState } from 'react'

interface QuizzQuestion {
    "question": string,
    "answer": string,
    "feedback": string,
    "hint": string
}

const QuizzQuestions: QuizzQuestion[] = [
    {
        "question": "📚 Which book was recommended during the podcast?",
        "answer": "The Power of Habits",
        "feedback": "🚀 That's the correct answer!",
        "hint": "💡 Hint: You could have given the author's name",
    },
    {
        "question": "🎯 How long a deep focus session should last?",
        "answer": "2 hours",
        "feedback": "🚀 Exactly!",
        "hint": "💡 Hint: Tiny breaks are recommended during the session",
    }
]

function MockedQuizz() {
    const [questionIndex, setQuestionIndex] = useState(0);

    return <div className={heroStyles.quizz}>
        <b className={heroStyles.question}>{QuizzQuestions[questionIndex].question}</b>
        <input
            value={QuizzQuestions[questionIndex].answer}
            type={"text"}
            disabled
        />
        <b className={heroStyles.question} style={{fontSize: "smaller", margin: "5px"}}>{QuizzQuestions[questionIndex].feedback}</b>
        <b className={heroStyles.question} style={{fontSize: "smaller", margin: "5px"}}>{QuizzQuestions[questionIndex].hint}</b>
        <button style={{
                marginTop: "20px",
                boxShadow: "none",
                scale: "1",
                cursor: "auto"
            }}
        >
            Next question →
        </button>
    </div>
}

function Illustration() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        position: "relative"
        }}
    >
        <Image
            src={PodcastPicture}
            width={500}
            alt={"A picture showing two women recording a podcast"}
        />
        <MockedQuizz />
    </div>
}

function CallToAction() {
    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}
    >
        <h1>
            Unleash your true learning self
        </h1>
        <div className={heroStyles.subtitle}>
            {process.env.NEXT_PUBLIC_APP_NAME} generates <b>quizzes</b> with your videos and PDF documents.
        </div>
        <button style={{margin: "50px"}}>
            Generate quizz ✨
        </button>
    </div>
}

export default function Hero() {
    return <div className={heroStyles.main}>
        <div className={bodyStyles.flex}>
            <CallToAction />
            <div style={{margin: "0 150px"}} />
            <Illustration />
        </div>
    </div>
}