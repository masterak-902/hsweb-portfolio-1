import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
    return (
        <>
            <div className='w-full bg-white'>
                <div className='w-[1024px] mx-auto'>
                    <p className='text-2xl italic font-bold text-center tracking-wider py-8'>FOOTER INFORMATION</p>
                    <ul className='flex justify-around mb-8'>
                        <li className={styles.listStyle}><Link href="/">HOME</Link></li>
                        <li className={styles.listStyle}><Link href="/about">ABOUT</Link></li>
                        <li className={styles.listStyle}><Link href="/">COMPANY</Link></li>
                        <li className={styles.listStyle}><Link href="/">RECRUIT</Link></li>
                        <li className={styles.listStyle}><Link href="/">LOGIN</Link></li>
                    </ul>
                    <p className='text-base text-center mb-8'>&copy; All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
}