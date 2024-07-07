'use client';

import { useState } from 'react';
import SideMenu from '../SideMenu';


export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <>
            <header className=''>
                <h1>HEADER GSAP</h1>
                <button onClick={toggle}>{isOpen ? "CLOSE" : "MENU"}</button>
            </header>

            <SideMenu open={isOpen} onCancel={() => setIsOpen(false)} />
        </>
    );
};