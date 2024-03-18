'use client'

import ScrollAppear from "../../ScrollAppear";
import Hero from "./Hero";
import Paragraph from "./Paragraph";
import styles from '../Body.module.css'
import { useState } from "react";

export default function Landing() {
    return <div className={styles.main}>
        <ScrollAppear>
            <Hero />
        </ScrollAppear>
        <ScrollAppear>
            <Paragraph
                title={"Hello"}
                content={"This is a test"}
            />
        </ScrollAppear>
    </div>
}