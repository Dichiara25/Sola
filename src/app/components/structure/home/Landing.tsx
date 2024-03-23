'use client'

import ScrollAppear from "../../ScrollAppear";
import Hero from "./Hero";
import styles from '../Body.module.css';
import Feedbacks from "./Feedbacks";
import How from "./How";
import UseCases from "./UseCases";
import CallToAction from "./CallToAction";
import Pricing from "./Pricing";

export default function Landing() {
    return <div className={styles.main}>
        <ScrollAppear>
            <Hero />
        </ScrollAppear>
        <ScrollAppear>
            <How />
        </ScrollAppear>
        <UseCases />
        <ScrollAppear>
            <Feedbacks />
        </ScrollAppear>
        <ScrollAppear>
            <Pricing />
        </ScrollAppear>
        <ScrollAppear>
            <CallToAction />
        </ScrollAppear>
    </div>
}