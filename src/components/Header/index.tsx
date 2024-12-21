import Link from "next/link";
import styles from "./style.module.scss";
import { SignInButton } from "../SignInButton";

export function Header() {
    return (
        <header className={styles.headerContainer}> 
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/images/logo.svg" alt="Logo meu board"/>
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/board">Board</Link>
                </nav>

                <SignInButton />
            </div>

        </header>
    )
}