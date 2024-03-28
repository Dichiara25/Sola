import styles from "./Footer.module.css";
import { routes } from "@/app/utils/routes";

interface Link {
    name: string,
    route: string
}

function getCurrentYear(): number {
    return new Date().getFullYear();
}

function Divider() {
    return <div style={{margin: "0 50px", opacity: ".3"}}>|</div>
}

function Brand() {
    const currentYear = getCurrentYear();

    return <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
            <h1 style={{fontSize: 'xx-large', margin: '0 5px'}}>
                {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
        </div>
        <div style={{marginTop: "20px", fontSize: "large"}}>
            © {process.env.NEXT_PUBLIC_APP_NAME} {currentYear}
        </div>
    </div>
}

function Links(props: {title: string, links: Link[]}) {
    return <div style={{display: "flex", flexDirection: "column"}}>
        <b className={styles.link}>{props.title}</b>
        {props.links.map((link, index) => (
            <a key={index} className={styles.link} href={link.route}>
                {link.name}
            </a>
        ))}
    </div>
}

export default function Footer() {
    const legalLinks: Link[] = [
        {
            name: "Privacy",
            route: routes.privacy
        },
        {
            name: "Terms of use",
            route: routes.termsOfUse
        }
    ]
    const contactLinks: Link[] = [
        {
            name: "support@sola.rocks",
            route: "mailto:support@sola.rocks"
        },
        {
            name: "security@sola.rocks",
            route: "mailto:security@sola.rocks"
        }
    ]

    return <div className={styles.main} style={{flexDirection: "column", textAlign: "center"}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Brand />
            <Divider />
            <Links title={"Legal"} links={legalLinks} />
            <Divider />
            <Links title={"Contact"} links={contactLinks} />
        </div>
    </div>
}