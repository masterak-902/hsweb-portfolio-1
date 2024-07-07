'use client';

import Link from 'next/link';
import styles from './index.module.css';

type Props = {
    open: boolean;
    onCancel: () => void;
}

export default function SideMenu({onCancel, open}:Props) {
    return open ?(
        <>
            <div className=''>
                <p className={styles.listLogo}>LOGO.</p>
                <ul>
                    <li className={styles.listStyle}><Link href="/">01. HOME</Link></li>
                    <li className={styles.listStyle}><Link href="/">02. NEWS</Link></li>
                    <li className={styles.listStyle}><Link href="/">03. COMPANY</Link></li>
                    <li className={styles.listStyle}><Link href="/">04. RECRUIT</Link></li>
                    <li className={styles.listStyle}><Link href="/">05. LOGIN</Link></li>
                </ul>
            </div>
        </>
    ):(<></>);
};