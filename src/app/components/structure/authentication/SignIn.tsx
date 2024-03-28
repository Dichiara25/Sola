import { Dispatch, SetStateAction } from "react"
import Google from "../../../assets/google.png"
import Image from "next/image"
import styles from "./Login.module.css"

export default function SignIn(props: {
    userEmail: string,
    setUserEmail: Dispatch<SetStateAction<string>>,
    userPassword: string,
    setUserPassword: Dispatch<SetStateAction<string>>,
    setExistingAccount: Dispatch<SetStateAction<boolean>>,
}) {
    return <div className={styles.main}>
        <h1>Welcome back!</h1>
        <form className={styles.form}>
            <label className={styles.label}>
                Email
            </label>
            <input
                type={"email"}
                placeholder={"Email address"}
                value={props.userEmail}
                onChange={(e) => props.setUserEmail(e.currentTarget.value)}
                required
            />
            <label className={styles.label}>
                Password
            </label>
            <input
                type={"password"}
                placeholder={"Password"}
                value={props.userPassword}
                onChange={(e) => props.setUserPassword(e.currentTarget.value)}
                min={12}
                required
            />
            <button style={{margin: "20px"}}>Log in</button>
            <div style={{margin: "10px 0 30px 0", opacity: ".3"}}>- OR -</div>
            <button style={{
                background: "white",
                color: "black",
                boxShadow: "none",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <Image
                    src={Google}
                    width={30}
                    alt={"Google logo"}
                    style={{marginRight: "10px"}}
                />
                Continue with Google
            </button>
        </form>
        <a
            style={{marginTop: "20px"}}
            onClick={() => props.setExistingAccount(false)}
        >
            Don`&apos;`t have an account yet?
        </a>
    </div>
}