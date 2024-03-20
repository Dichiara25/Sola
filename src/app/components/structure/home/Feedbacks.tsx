import { useState } from "react"
import feedbackStyles from "./Feedbacks.module.css"
import bodyStyles from "../Body.module.css"

const MAX_COMMENT_LENGTH = 300;

interface Feedback {
    username: string,
    comment: string,
    company: string,
    occupation: string,
    stars: number
}

const fixtures: Feedback[] = [
    {
        username: "Emmanuel D.",
        comment: "Transforming my YouTube educational content into interactive quizzes used to be a daunting task that consumed hours of my week. Then I discovered this incredible platform, and it has completely revolutionized the way I engage with my audience!",
        occupation: "Co-founder & head of research",
        company: "Watchwise",
        stars: 5
    },
    {
        username: "Alice J.",
        comment: "The AI effortlessly turns my videos into comprehensive, thought-provoking questionnaires that not only make learning fun but also provide invaluable feedback on my viewers' understanding of the topics.",
        occupation: "CTO",
        company: "Notariz",
        stars: 5
    },
    {
        username: "Antoine C.",
        comment: "The seamless API integration was a game changer for my workflow, allowing me to integrate quizzes directly into my website and social media channels.",
        occupation: "Founder",
        company: "Briefly",
        stars: 5
    }
]

export default function Feedbacks() {
    const [feedbackIndex, setFeedbackIndex]= useState(0);

    const increaseCounter = () => {
        setFeedbackIndex(feedbackIndex < fixtures.length - 1 ? feedbackIndex + 1 : 0);
    }

    const decreaseCounter = () => {
        setFeedbackIndex(feedbackIndex > 0 ? feedbackIndex - 1 : fixtures.length - 1);
    }


    return <div className={feedbackStyles.main}>
        <h1>They recommend {process.env.NEXT_PUBLIC_APP_NAME}</h1>
        <div className={bodyStyles.subtitle}>Take a look at what our happy customers have said about us.</div>
        <div className={feedbackStyles.box}>
            <div className={feedbackStyles.comment}>
                {fixtures[feedbackIndex].comment.slice(0, MAX_COMMENT_LENGTH)}
                {fixtures[feedbackIndex].comment.length > MAX_COMMENT_LENGTH && "..."}
            </div>
            <div style={{margin: "10px 0"}} />
            <b>
                {fixtures[feedbackIndex].username} • {fixtures[feedbackIndex].occupation} at {fixtures[feedbackIndex].company}
            </b>
            <div className={feedbackStyles.leftArrow} onClick={() => increaseCounter()}>
                ←
            </div>
            <div className={feedbackStyles.rightArrow} onClick={() => decreaseCounter()}>
                →
            </div>
        </div>
    </div>
}