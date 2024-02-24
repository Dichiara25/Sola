import { APP_NAME } from '@/app/utils/layout'
import styles from '../Body.module.css'

export default function Hero() {
    return <div className={styles.main} style={{fontSize: "larger"}}>
        <h1>
            Unlock your true learning power
        </h1>
        <div className={styles.subtitle}>
            {APP_NAME} generates <b>quizzes</b> with your videos and PDF documents.
        </div>
    </div>
}