import { FaGithub } from "react-icons/fa";
import styles from "./style.module.scss";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return (
            <div>Loading ...</div>
        )
    }

    return !(!session || Object.keys(session).length === 0) ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <img src="https://sujeitoprogramador.com/steve.png" alt="Foto do usuario"/>
            Hello, {session.user?.name || "User"}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn()}
        >
            <FaGithub color="#ffb800"/>
            Sign in with Github
        </button>
    )
}