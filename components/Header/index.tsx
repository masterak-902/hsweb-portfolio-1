'use client';

import { useState } from 'react';
import SideMenu from '../HeaderMenu';
import LocaleSwitcher from "@/components/Locale-Switcher";
import Link from 'next/link';


export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <>
            <header className='fixed z-50 w-full bg-white'>
                <section className='w-full h-24 flex justify-around items-center px-16'>
                    <h1 className='text-2xl tracking-wider'><Link href="/">HEADER</Link></h1>
                    <p className='text-xl italic'>This page is not responsive. PC only.</p> 
                    <LocaleSwitcher />
                    <button className='text-xl tracking-wider' onClick={toggle}>{isOpen ? "CLOSE" : "MENU"}</button>
                </section>
                <SideMenu open={isOpen} onCancel={() => setIsOpen(false)} />
            </header>
        </>
    );
};