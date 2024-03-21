import howStyles from "./How.module.css"
import bodyStyles from "../Body.module.css"

interface Step {
    title: string,
    description: string,
    icon: string
}

export default function How() {
    const steps: Step[] = [
        {
            title: "Upload or link",
            description: "Start by uploading your PDF document or sharing a YouTube video link.",
            icon: "🔗"
        },
        {
            title: "AI magic",
            description: "Our AI analyzes the content, extracting key information and generating a tailored quiz.",
            icon: "✨"
        },
        {
            title: "Integrate",
            description: "Adjust the questionnaire to your needs and seamlessly integrate it into your workflow via our API.",
            icon: "⚙️"
        },
        {
            title: "Engage & Assess",
            description: "Share your interactive quizzes with your audience for a captivating learning experience and gain insightful feedback instantly.",
            icon: "📈"
        }
    ]

    return <div className={howStyles.main}>
        <h1>How does it work?</h1>
        <div className={bodyStyles.subtitle}>Discover how {process.env.NEXT_PUBLIC_APP_NAME} works under the hood.</div>
        <div className={howStyles.container}>
            {steps.map((step: Step, index: number) => (
            <div key={index} className={howStyles.box}>
                <div style={{fontSize: "x-large"}}>{step.icon}</div>
                <h1 style={{fontSize: "xx-large"}}>{step.title}</h1>
                <div>{step.description}</div>
            </div>
        ))}
        </div>
    </div>
}