import { FaGithub } from "react-icons/fa";
import styles from "./style.module.scss";
import { FiX } from "react-icons/fi";

export function SignInButton() {

    const session = true;

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => {}}
        >
            <img src="https://sujeitoprogramador.com/steve.png" alt="Foto do usuario"/>
            Hello Jefferson
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => {}}
        >
            <FaGithub color="#ffb800"/>
            Sign in with Github
        </button>
    )
}