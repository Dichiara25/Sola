import { routes } from "@/app/utils/routes"
import styles from "./Header.module.css"
import { APP_NAME } from "@/app/utils/layout"

export function Brand() {
    return <a style={{display: "flex", alignItems: "center"}} href="/">
        <h1 className={styles.brand}>{APP_NAME}</h1>
    </a>
}

export function Navigation() {
    return <>
        <a href={routes.pricing}>Pricing</a>
        <a href={routes.login} style={{marginLeft: "50px"}}>
            <button>Generate →</button>
        </a>
    </>
}

export default function Header() {
    return <div className={styles.container}>
        <div style={{display: "flex", alignItems: "center"}}>
            <Brand />
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
            <Navigation />
        </div>
    </div>
}