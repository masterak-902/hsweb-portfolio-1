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
            <div className='w-full flex justify-center py-8 bg-white'>
                <div className='w-80'>
                    <ul>
                        <li className={styles.listStyle}><Link href="/">01. HOME</Link></li>
                        <li className={styles.listStyle}><Link href="/">02. NEWS</Link></li>
                        <li className={styles.listStyle}><Link href="/">03. COMPANY</Link></li>
                        <li className={styles.listStyle}><Link href="/">04. RECRUIT</Link></li>
                        <li className={styles.listStyle}><Link href="/">05. LOGIN</Link></li>
                    </ul>
                    {/* <Image /> */}
                    <p className='text-2xl italic font-bold text-center tracking-wider mt-8'>LOGO MARK</p>
                </div>
            </div>
            <div className='fixed z-40 w-full h-full bg-black bg-opacity-50' onClick={onCancel} />
        </>
    ):(<></>);
};