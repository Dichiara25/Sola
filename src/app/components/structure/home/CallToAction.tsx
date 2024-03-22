import { routes } from "@/app/utils/routes"
import styles from "./CallToAction.module.css"
import bodyStyles from "../Body.module.css"

export default function CallToAction() {
    return <div className={styles.main}>
        <h1>Revolutionize the way you learn</h1>
        <div className={bodyStyles.subtitle}>
            Upload your document & generate your first quiz for free.
        </div>
        <div className={styles.button}>
            <a href={routes.cook}>
                <button>
                    Try {process.env.NEXT_PUBLIC_APP_NAME}
                </button>
            </a>
        </div>
    </div>
}