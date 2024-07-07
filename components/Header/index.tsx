'use client';

import { useState } from 'react';
import SideMenu from '../SideMenu';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <h1>HEADER GSAP</h1>
                <SideMenu open={isOpen} onCancel={() => setIsOpen(false)} />
            </header>
        </>
    );
};