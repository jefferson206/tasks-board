import Link from "next/link";
import styles from './styles.module.scss'

export default function SupportButton() {

    return (
        <div className={styles.donateContainer}>
            <Link href='/donate'>
                <button>Apoiar</button>
            </Link>
        </div>
    )
}