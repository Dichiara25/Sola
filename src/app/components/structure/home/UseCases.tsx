'use client'

import ScrollAppear from "../../ScrollAppear";
import Paragraph from "./Paragraph";
import styles from '../Body.module.css'
import Student from "../../../assets/student.png";
import Meeting from "../../../assets/meeting.png";
import Developer from "../../../assets/developer.png"
import { routes } from "@/app/utils/routes";
import { StaticImageData } from "next/image";

interface UseCase {
    title: string,
    content: string,
    image: StaticImageData,
    alt: string,
    callToAction: string,
    link: string,
    reverse: boolean,
    quote: string,
    icon: string,
}

export default function UseCases() {
    const useCases: UseCase[] = [
        {
            title: "Study smarter, not harder",
            content: `${process.env.NEXT_PUBLIC_APP_NAME} uses AI to automatically transform lecture videos and reading materials into study aids and assessments. Literally for free.`,
            image: Student,
            alt: "A smiling student studying his lessons",
            callToAction: "Start generating for free",
            link: routes.cook,
            reverse: false,
            quote: "Turn your notes into interactive quizzes!",
            icon: "📄"
        },
        {
            title: "Streamline corporate training",
            content: `Using ${process.env.NEXT_PUBLIC_APP_NAME}, upgrade your training materials by converting online meetings, corporate documentation and instructional videos into interactive quizzes.`,
            image: Meeting,
            alt: "A smiling business woman attending an online meeting",
            callToAction: "Select your plan",
            link: routes.pricing,
            reverse: true,
            quote: "Ensure your co-workers are synced!",
            icon: "🎬"
        },
        {
            title: "Adapted to your workflow",
            content: `${process.env.NEXT_PUBLIC_APP_NAME} exposes a REST API so you can embed your quiz generation use cases right into your workflows. By providing an interface out of the box, ${process.env.NEXT_PUBLIC_APP_NAME} relieves you from having to create your own.`,
            image: Developer,
            alt: "A happy developer in front of an IDE",
            callToAction: "Get your API key",
            link: routes.api,
            reverse: false,
            quote: "Automate quiz generation!",
            icon: "⚒️"
        }
    ]

    return <div className={styles.main}>
        <h1>What can {process.env.NEXT_PUBLIC_APP_NAME} be used for?</h1>
        <div className={styles.subtitle}>Discover some use cases in which you could leverage {process.env.NEXT_PUBLIC_APP_NAME}.</div>
        {
            useCases
                .map((useCase: UseCase, index: number) => (
                    <div key={index}>
                        <ScrollAppear>
                            <Paragraph
                                title={useCase.title}
                                content={useCase.content}
                                image={useCase.image}
                                alt={useCase.alt}
                                link={useCase.link}
                                callToAction={useCase.callToAction}
                                reverse={useCase.reverse}
                                quote={useCase.quote}
                                icon={useCase.icon}
                            />
                        </ScrollAppear>
                    </div>
            ))
        }
    </div>
}