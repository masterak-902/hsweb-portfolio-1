import styles from './index.module.css';

export default function SideMenu() {
    return (
        <>
            <p className={styles.listLogo}>LOGO.</p>
            <ul>
                <li className={styles.listStyle}>HOME</li>
                <li className={styles.listStyle}>1.</li>
                <li className={styles.listStyle}>2.</li>
                <li className={styles.listStyle}>3.</li>
                <li className={styles.listStyle}>4.</li>
                <li className={styles.listStyle}>5.</li>
            </ul>
        </>
    );
};