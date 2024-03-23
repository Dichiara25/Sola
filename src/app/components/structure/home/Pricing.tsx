import { routes } from "@/app/utils/routes"
import styles from "./Pricing.module.css"
import bodyStyles from "../Body.module.css"
import Switch from "../../Switch"
import { useState } from "react"

interface Plan {
    title: string,
    price: number,
    callToAction: string,
    link: string,
    includedPerks: string[],
    excludedPerks: string[],
    popular: boolean
}

const availablePlans: Plan[] = [
    {
        title: "Free tier",
        price: 0,
        callToAction: "Create an account",
        link: routes.login,
        includedPerks: ["Hello"],
        excludedPerks: ["Hi"],
        popular: false,
    },
    {
        title: "Premium ",
        price: 20,
        callToAction: "Create an account",
        link: routes.login,
        includedPerks: ["Hello"],
        excludedPerks: ["Hi"],
        popular: true,
    },
    {
        title: "Enterprise",
        price: 50,
        callToAction: "Create an account",
        link: routes.login,
        includedPerks: ["Hello"],
        excludedPerks: ["Hi"],
        popular: false,
    },
]

function Plan(props: {
        title: string,
        price: number,
        includedPerks: string[],
        excludedPerks: string[],
        callToAction: string,
        link: string,
        popular: boolean,
        annual: boolean,
    }) {
        const annualDiscount = .8;

        return <div className={props.popular ? styles.popular : styles.box}>
            <h1 style={{marginBottom: "10px"}}>{props.title}</h1>
            <div className={bodyStyles.subtitle}>
                <b>{props.annual && props.price > 0 ? <span><s style={{fontSize: "smaller"}}>${props.price}</s> <span>${props.price * annualDiscount}</span></span> : `$${props.price}`}</b>/month {props.annual && props.price > 0 && <span style={{fontSize: "smaller"}}>(${props.price * 12 * annualDiscount}/year)</span>}
            </div>
            <hr className={styles.divider} />
            <div className={styles.list}>
                {
                    props.includedPerks.map(
                        (perk: string) => (
                            <b className={styles.bulletPoint}>
                                ✨ {perk}
                            </b>
                        )
                    )
                }
                {
                    props.excludedPerks.map(
                        (perk: string) => (
                            <b className={styles.bulletPoint}>
                                ❌ <span style={{opacity: ".4"}}>{perk}</span>
                            </b>
                        )
                    )
                }
            </div>
            <hr className={styles.divider} />
            <a href={props.link}>
                <button className={styles.button}>
                    {props.callToAction}
                </button>
            </a>
        </div>
}

export default function Pricing() {
    const [switched, setSwitched] = useState(false);

    return <div className={styles.main}>
        <h1>Available plans</h1>
        <div className={styles.subtitle}>
            Subscribe to one of our plans.
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "30px"}}>
            <Switch
                isOn={switched}
                handleToggle={setSwitched}
            />
            <b>
                {switched ? "Annually" : "Monthly"}
            </b>
        </div>
        <div className={styles.container}>
            {availablePlans.map(
                (plan: Plan, index: number) => (
                    <div key={index}>
                        <Plan
                            title={plan.title}
                            price={plan.price}
                            includedPerks={plan.includedPerks}
                            excludedPerks={plan.excludedPerks}
                            callToAction={plan.callToAction}
                            link={plan.link}
                            popular={plan.popular}
                            annual={switched}
                        />
                    </div>
                    )
                )
            }
        </div>
    </div>
}