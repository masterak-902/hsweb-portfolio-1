'use client';

import { useState } from 'react';
import SideMenu from '../HeaderMenu';


export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <>
            <header className='fixed z-50 w-full bg-white'>
                <section className='w-full h-24 flex justify-between items-center px-16'>
                    <h1 className='text-2xl tracking-wider'>HEADER</h1>
                    <p className='text-xl italic'>This page is not responsive.</p>
                    <button className='text-xl tracking-wider' onClick={toggle}>{isOpen ? "CLOSE" : "MENU"}</button>
                </section>
                <SideMenu open={isOpen} onCancel={() => setIsOpen(false)} />
            </header>
        </>
    );
};