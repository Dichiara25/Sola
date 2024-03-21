import PodcastPicture from "@/app/assets/podcast.png"
import heroStyles from './Hero.module.css'
import bodyStyles from '../Body.module.css'
import Image from 'next/image'
import { useState } from 'react'

interface quizQuestion {
    "question": string,
    "answer": string,
    "feedback": string,
    "hint": string
}

const quizQuestions: quizQuestion[] = [
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

function Mockedquiz() {
    const [questionIndex, setQuestionIndex] = useState(0);

    return <div className={heroStyles.quiz}>
        <b className={heroStyles.question}>{quizQuestions[questionIndex].question}</b>
        <input
            value={quizQuestions[questionIndex].answer}
            type={"text"}
            disabled
        />
        <b className={heroStyles.question} style={{fontSize: "smaller", margin: "5px"}}>{quizQuestions[questionIndex].feedback}</b>
        <b className={heroStyles.question} style={{fontSize: "smaller", margin: "5px"}}>{quizQuestions[questionIndex].hint}</b>
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
            position: "relative",
            alignItems: "center"
        }}
    >
        <Image
            src={PodcastPicture}
            width={500}
            alt={"A picture showing two women recording a podcast"}
        />
        <Mockedquiz />
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
            {process.env.NEXT_PUBLIC_APP_NAME} uses AI to generate <b>quizzes</b> based on your videos and PDFs.
        </div>
        <button style={{margin: "50px"}}>
            Generate quiz
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