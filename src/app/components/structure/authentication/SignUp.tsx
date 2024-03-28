import { Dispatch, SetStateAction, useState } from "react"
import Google from "../../../assets/google.png"
import Image from "next/image"
import styles from "./Login.module.css"
import { containsLowercase, containsNumber, containsSpecialCharacter, containsUppercase, isValidEmail, isValidPassword } from "@/app/utils/sed"
import { routes } from "@/app/utils/routes"
import { createAccount } from "@/app/auth/firebaseAuth"

const MINIMUM_PASSWORD_LENGTH = 12

function checkSignUpForm(
    email: string,
    password: string,
    confirmedPassword: string,
    acceptedTerms: boolean
): boolean {
    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(
        password,
        MINIMUM_PASSWORD_LENGTH
    );

    return validEmail &&
        validPassword &&
        password === confirmedPassword &&
        acceptedTerms
}

function CredentialsForm(props: {
    userEmail: string,
    setUserEmail: Dispatch<SetStateAction<string>>,
    userPassword: string,
    setUserPassword: Dispatch<SetStateAction<string>>,
    setExistingAccount: Dispatch<SetStateAction<boolean>>,
    setFilledCredentials: Dispatch<SetStateAction<boolean>>,
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    async function handleCredentialsForm() {
        const validSignUpForm: boolean = checkSignUpForm(
            props.userEmail,
            props.userPassword,
            confirmedPassword,
            acceptedTerms
        )

        if (validSignUpForm) {
            props.setFilledCredentials(true);
        }
    }

    return <div className={styles.main}>
        <h1>Create an account</h1>
        <form className={styles.form} onSubmit={handleCredentialsForm}>
            <label className={styles.label}>
                Email
            </label>
            <input
                type={"email"}
                placeholder={"Email address"}
                value={props.userEmail}
                onChange={(e) => props.setUserEmail(e.currentTarget.value)}
            />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <label className={styles.label}>
                    Password
                </label>
                <span className={styles.show} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "😳" : "🫣"}
                </span>
            </div>
            {props.userPassword.length > 0 &&
                <div>
                    <p className={styles.hint}>
                        {props.userPassword.length >= MINIMUM_PASSWORD_LENGTH ? "✨" : "❌"} At least {MINIMUM_PASSWORD_LENGTH}-character long
                    </p>
                    <p className={styles.hint}>
                        {containsUppercase(props.userPassword) ? "✨" : "❌"} At least one uppercase letter
                    </p>
                    <p className={styles.hint}>
                        {containsLowercase(props.userPassword) ? "✨" : "❌"} At least one lowercase letter
                    </p>
                    <p className={styles.hint}>
                        {containsSpecialCharacter(props.userPassword) ? "✨" : "❌"} At least one special character
                    </p>
                    <p className={styles.hint}>
                        {containsNumber(props.userPassword) ? "✨" : "❌"} At least one number
                    </p>
                </div>
            }
            <input
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                value={props.userPassword}
                onChange={(e) => props.setUserPassword(e.currentTarget.value)}
                min={MINIMUM_PASSWORD_LENGTH}
            />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <label className={styles.label}>
                    Confirm password
                </label>
                <span className={styles.show} onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}>
                    {showConfirmedPassword ? "😳" : "🫣"}
                </span>
            </div>
            {confirmedPassword.length > 0 &&
                <p className={styles.hint}>
                    {confirmedPassword === props.userPassword ? "✨" : "❌"} Password and confirmed password {confirmedPassword === props.userPassword ? "" : "do not"} match.
                </p>
            }
            <input
                type={showConfirmedPassword ? "text" : "password"}
                placeholder={"Confirm password"}
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.currentTarget.value)}
            />
            <div>
                <input
                    type={"checkbox"}
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                />
                <label style={{marginLeft: "10px", cursor: "pointer"}} className={styles.hint} onClick={() => setAcceptedTerms(!acceptedTerms)}>
                    By signing up, you comply with our <a style={{fontWeight: "bold", color: "var(--first-color)"}} href={routes.termsOfUse}>terms of use</a> and <a style={{fontWeight: "bold", color: "var(--first-color)"}} href={routes.privacy}>privacy policy</a>.
                </label>
            </div>
            <button
                style={{margin: "20px 0"}}
                disabled={
                    !isValidPassword(props.userPassword, MINIMUM_PASSWORD_LENGTH)
                    || !isValidEmail(props.userEmail)
                    || props.userPassword !== confirmedPassword
                    || !acceptedTerms
                }
                type={"submit"}
            >
                Sign up
            </button>
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
    </div>
}

function DetailsForm(props: {
    setFilledCredentials: Dispatch<SetStateAction<boolean>>
}) {
    return <div className={styles.main}>
        <h1>Tell us about yourself</h1>
    </div>
}

export default function SignUp(props: {
    userEmail: string,
    setUserEmail: Dispatch<SetStateAction<string>>,
    userPassword: string,
    setUserPassword: Dispatch<SetStateAction<string>>,
    setExistingAccount: Dispatch<SetStateAction<boolean>>,
}) {
    const [filledCredentials, setFilledCredentials] = useState(false);

    return <div>
        {filledCredentials ?
            <DetailsForm
                setFilledCredentials={setFilledCredentials}
            />
            :
            <CredentialsForm
                userEmail={props.userEmail}
                setUserEmail={props.setUserEmail}
                userPassword={props.userPassword}
                setUserPassword={props.setUserPassword}
                setExistingAccount={props.setExistingAccount}
                setFilledCredentials={setFilledCredentials}
            />
        }
        <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
            <a style={{marginTop: "20px"}} onClick={() => props.setExistingAccount(true)}>
                Already have an account?
            </a>
            <a style={{marginTop: "20px"}} onClick={() => props.setExistingAccount(true)}>
                Forgot your password?
            </a>
        </div>
    </div>
}