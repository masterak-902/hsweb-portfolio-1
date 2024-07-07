'use client';

import { useState } from 'react';
import SideMenu from '../SideMenu';


export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <>
            <header className='w-full h-24 flex justify-between items-center px-8 mb-8'>
                <h1 className='text-2xl tracking-wider'>HEADER</h1>
                <button className='text-xl tracking-wider' onClick={toggle}>{isOpen ? "CLOSE" : "MENU"}</button>
            </header>
            <SideMenu open={isOpen} onCancel={() => setIsOpen(false)} />
        </>
    );
};