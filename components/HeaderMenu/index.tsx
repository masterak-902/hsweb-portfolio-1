'use client';

import Link from 'next/link';

type Props = {
    open: boolean;
    onCancel: () => void;
}

export default function SideMenu({onCancel, open}:Props) {
    return open ?(
        <>
            <div className='w-full flex justify-center py-8 bg-white'>
                <div className='w-50'>
                    <ul>
                        <Link href="/"><li className="custom-menu">01. HOME</li></Link>
                        <Link href="/about"><li className="custom-menu">02. ABOUT</li></Link>
                        <Link href="/gallery"><li className="custom-menu">03. GALLERY</li></Link>
                    </ul>
                    {/* <Image /> */}
                    <p className='text-2xl italic font-bold text-center tracking-wider mt-8'>LOGO MARK</p>
                </div>
            </div>
            <div className='fixed z-40 w-full h-full bg-black bg-opacity-50' onClick={onCancel} />
        </>
    ):(<></>);
};