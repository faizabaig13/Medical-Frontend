"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

  const navItems = [
    {
        id: 1,
        text: "Home",
        link: "#"
    },
    {
        id: 2,
        text: "About",
        link: "#"
    },
    {
        id: 3,
        text: "Services",
        link: "#"
    },
    {
        id: 4,
        text: "How It Works",
        link: "#"
    },
    {
        id: 5,
        text: "Contact",
        link: "#"
    },
    ]
  const Header = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar)
    }
    const closeNavbar = () => {
        setOpenNavbar(false)
    }
    const {user} = useKindeBrowserClient();

    useEffect(()=>{
        console.log(user);
    },[user])
    return (
        <>
            <div onClick={() => { closeNavbar() }} aria-hidden="true" className={
                `fixed bg-gray-800/40 inset-0 z-30 ${openNavbar ? "flex lg:hidden" : "hidden"}`
            } />
            <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-filter backdrop-blur-xl">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max">
                        <Link href="/" className="font-semibold flex items-center gap-x-2">
                        <Image src={'/logoipsum-296.svg'} width={30} height={30} alt='logo'/>
                            <span className="text-lg text-gray-700 dark:text-gray-300">MedLink</span>
                        </Link>
                    </div>
                    <div className={`
                        absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                        ${openNavbar ? "" : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"}
                    `}>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                            {
                                navItems.map(navItem => (
                                    <li key={navItem.id}>
                                        <Link href={navItem.link} className="relative py-2.5 duration-300 ease-linear hover:text-sky-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-sky-600">{navItem.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                        {user?
                        <Popover>
                        <PopoverTrigger>
                        {user?.picture? 
                        <Image src={user?.picture} alt='profile-image'
                        width={40}
                        height={40}
                        className='rounded-full' />:
                        <Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt='profile-image'
                        width={40}
                        height={40}
                        className='rounded-full' />}
                        </PopoverTrigger>
                        <PopoverContent className="w-44">
                            <ul className='flex  flex-col gap-2'>
                           
                            <Link href={'/my-booking'} className='cursor-pointer
                             hover:bg-slate-100 p-2 rounded-md'>My Booking</Link>
                                <li className='cursor-pointer
                             hover:bg-slate-100 p-2 rounded-md'>
                                <LogoutLink> Logout </LogoutLink></li>
                            </ul>
                        </PopoverContent>
                        </Popover>
                
                   
                       :
                        <LoginLink> <Button>Get Started</Button></LoginLink>
                       } 
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => { toggleNavbar() }} aria-label="toggle navbar" className="outline-none border-r border-r-gray-200 dark:border-r-gray-800 pr-3 relative py-3 children:flex">
                            <span aria-hidden="true" className={`
                                h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                                ${openNavbar ? " rotate-45 translate-y-[0.33rem]" : ""}
                            `} />
                            <span aria-hidden="true" className={`
                                mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                                ${openNavbar ? " -rotate-45 -translate-y-[0.33rem]" : ""}
                            `} />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
    }
     
     

export default Header