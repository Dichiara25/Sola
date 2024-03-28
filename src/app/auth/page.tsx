"use client"

import { useState } from "react";
import SignUp from "../components/structure/authentication/SignUp";
import SignIn from "../components/structure/authentication/SignIn";

export default function LoginPage() {
    const [existingAccount, setExistingAccount] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return <div>
        {existingAccount ?
            <SignIn
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
                setExistingAccount={setExistingAccount}
            />
            :
            <SignUp
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
                setExistingAccount={setExistingAccount}
            />
        }
    </div>
}