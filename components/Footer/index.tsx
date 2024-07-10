import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className='w-full bg-white'>
                <div className='w-[1024px] mx-auto'>
                    <p className='text-2xl italic font-bold text-center tracking-wider py-8'>FOOTER INFORMATION</p>
                    <ul className='flex justify-around mb-8'>
                        <li className=""><Link href="/about">ABOUT</Link></li>
                        <li className=""><Link href="/gallery">GALLERY</Link></li>
                    </ul>
                    <p className='text-base text-center mb-8'>&copy; All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
}