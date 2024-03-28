import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";

export async function createAccount(
    email: string,
    password: string
): Promise<User | void> {
    const results = createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
        .then((userCredential) => {
            // Signed up
            toast.success(`Welcome on ${process.env.NEXT_PUBLIC_APP_NAME}!`);
            return userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            console.error(errorCode, errorMessage)
        });

    return results;
}