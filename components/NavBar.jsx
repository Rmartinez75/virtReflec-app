
'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import Image from 'next/image'

import SubDrop from "./SubDrop";

import { MdArrowDropDown, MdOutlineShoppingCart, MdCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";
import DropMenu from './DropMenu';


function NavBar() {
  return (
    <>
        {/* CREATE NAVBAR AND STYLE */}       
        <div className='hidden lg:flex lg:justify-between lg:items-center py-2 lg:sticky top-0 bg-[#28231d] text-[#afaeae] text-[13px]'>
            {/* LOGO AND COMPANY NAME DIV */}
            <div className='text-center ml-[25px] p-[10px]'>
                <Link href={'/'} className='flex gap-2'><Image src='/assets/images/logo5.png' alt='LOGO' width={25} height={20} className='object-contain' />
                    Metaphysical Abstract Design
                </Link>
            </div>
            {/* DESKTOP NAVBAR OPTIONS */}
            <div className='lg:flex'>
                <ul className='flex'>
                    <li className='mr-[58px] flex'>
                        {/* DROPMENU */}
                        <DropMenu />
                    </li>
                    <li className='mr-[58px]'>
                        <Link href={'/'}>About</Link>
                    </li>
                    <li className='mr-[58px] flex'>
                        <Link href={'/'} className='flex'>Cart<MdOutlineShoppingCart className='mt-[4px] ml-[10px]' /></Link>
                    </li>
                    <li className='flex mr-[5px]'>
                        <Link href={'/'} className='flex'>Login<IoMdLogIn className='mt-[4px] ml-[10px]' /></Link>
                    </li>
                    <span className='mr-[5px] ml-[5px]'>&nbsp; or &nbsp;</span>
                    <li className='mr-[50px] flex'>
                        <Link href={'/'} className='flex'>Register<FaRegRegistered className='mt-[4px] ml-[10px]' /></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>        
    </>
  )
}

export default NavBar
