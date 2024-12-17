import Link from "next/link";
import styles from "./style.module.scss";

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

                <button>
                    Entrar com Github
                </button>
            </div>

        </header>
    )
}