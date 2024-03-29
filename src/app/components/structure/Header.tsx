import { routes } from "@/app/utils/routes"
import styles from "./Header.module.css"

export function Brand() {
    return <a style={{display: "flex", alignItems: "center"}} href="/">
        <h1 className={styles.brand}>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
    </a>
}

export function Navigation() {
    return <>
        <a href={routes.plans} style={{marginLeft: "50px"}}>Pricing</a>
        <a href={routes.api} style={{marginLeft: "50px"}}>API</a>
        <a href={routes.cook} style={{marginLeft: "50px"}} className={styles.login}>
            <button>Generate quiz</button>
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