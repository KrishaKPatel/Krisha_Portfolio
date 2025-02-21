import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    const handleMenuItemClick = () => {
        closeMenu();
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`w-full fixed px-5 sm:px-4 lg:px-8 xl:px-[8%] py-1.5 sm:py-2 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Image src={assets.logo} alt='Logo' className='w-28 sm:w-20 cursor-pointer rounded-full ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : "" priority}'></Image>
                </a>
                <ul className={`hidden md:flex items-center justify-center gap-6 lg:gap-8 rounded-full px-10    py-2 sm:px-6 sm:py-3 ${isScroll ? "" : "bg-navBG bg-opacity-90"} text-navColor font-bold shadow-2xl text-base sm:text-sm`}>
                    <li><a className='font-Ovo hover:text-black transition duration-300' href="#top">Home</a></li>
                    <li><a className='font-Ovo hover:text-black transition duration-300' href="#about">About me</a></li>
                    <li><a className='font-Ovo hover:text-black transition duration-300' href="#services">Experience</a></li>
                    <li><a className='font-Ovo hover:text-black transition duration-300' href="#work">Projects</a></li>
                    <li><a className='font-Ovo hover:text-black transition duration-300' href="#education">Education</a></li>
                    <li><a className='font-Ovo hover:text-black transition duration-300' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>

                    <a href="#contact" className='hidden lg:flex items-center gap-2 px-10 py-1.5 sm:px-6 sm:py-1 border border-navColor-500 rounded-full ml-3 font-Ovo text-navColor font-bold shadow-2xl hover:text-black transition duration-300'>Contact <Image src={assets.arrow_icon} className='w-2' alt="pictue"></Image></a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt="Open menu" className='w-6'></Image>
                    </button>
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 text-navColor font-bold'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt="Close menu" className='w-5 cursor-pointer'></Image>
                    </div>

                    <li><a className='font-Ovo' onClick={handleMenuItemClick} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={handleMenuItemClick} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={handleMenuItemClick} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={handleMenuItemClick} href="#work">Work</a></li>
                    <li><a className='font-Ovo' onClick={handleMenuItemClick} href="#contact">Contact me</a></li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar
