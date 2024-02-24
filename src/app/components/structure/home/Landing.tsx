import ScrollAppear from "../../ScrollAppear";
import Hero from "./Hero";
import styles from '../Body.module.css'

export default function Landing() {
    return <div className={styles.main}>
        <ScrollAppear>
            <Hero />
        </ScrollAppear>
    </div>
}