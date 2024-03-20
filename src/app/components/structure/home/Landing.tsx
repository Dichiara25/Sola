'use client'

import ScrollAppear from "../../ScrollAppear";
import Hero from "./Hero";
import Paragraph from "./Paragraph";
import styles from '../Body.module.css'
import Student from "../../../assets/student.png";
import Meeting from "../../../assets/meeting.png";
import Developer from "../../../assets/developer.png"
import { routes } from "@/app/utils/routes";
import Feedbacks from "./Feedbacks";

export default function Landing() {
    return <div className={styles.main}>
        <ScrollAppear>
            <Hero />
        </ScrollAppear>
        <ScrollAppear>
            <Paragraph
                title={"Study smarter, not harder"}
                content={`${process.env.NEXT_PUBLIC_APP_NAME} uses AI to automatically transform lecture videos and reading materials into study aids and assessments. Literally for free.`}
                image={Student}
                alt={"A smiling student studying his lessons"}
                callToAction={"Start generating for free"}
                link={routes.cook}
                reverse={true}
            />
        </ScrollAppear>
        <ScrollAppear>
            <Paragraph
                title={"Streamline your corporate training"}
                content={`Using ${process.env.NEXT_PUBLIC_APP_NAME}, upgrade your training materials by converting online meetings, corporate documentation and instructional videos into interactive quizzes.`}
                image={Meeting}
                alt={"A business woman attending an online meeting with a happy face"}
                callToAction={"Select your plan"}
                link={routes.pricing}
                reverse={false}
            />
        </ScrollAppear>
        <ScrollAppear>
            <Paragraph
                title={"Adapted to your workflow"}
                content={`${process.env.NEXT_PUBLIC_APP_NAME} exposes a REST API so you can embed your quizz generation use cases right into your workflows. By providing an interface out of the box, ${process.env.NEXT_PUBLIC_APP_NAME} relieves you from having to create your own.`}
                image={Developer}
                alt={"A happy developer in front of an IDE"}
                callToAction={"Get your API key"}
                link={routes.api}
                reverse={true}
            />
        </ScrollAppear>
        <ScrollAppear>
            <Feedbacks />
        </ScrollAppear>
    </div>
}