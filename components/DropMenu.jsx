
'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

import SubDrop from "./SubDrop";

import { MdArrowDropDown, MdCircle } from "react-icons/md";

function DropMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex focus:outline-none'>
            Firm-Wear
            <MdArrowDropDown className='flex mt-[1px] ml-[10px] text-[20px]' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mt-[15px] ml-[75px] rounded-[10px] w-[200px] shadow-2xl bg-[#FFF3F3]'>
            <SubDrop />
            <DropdownMenuItem className='mb-5 flex hover:bg-gray-700'>
                <Link 
                    href={'/'} 
                    className="flex">
                    <MdCircle className="mt-[5px] mr-4 text-[10px] text-red-600" />
                    Pants
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='mb-5 hover:bg-gray-700'>
                <Link 
                  href={'/'} 
                  className="flex">
                    <MdCircle className="mt-[5px] mr-4 text-[10px] text-red-600" />
                    Shorts
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='mb-5 hover:bg-gray-700'>
                <Link 
                  href={'/'} 
                  className="flex">
                    <MdCircle className="mt-[5px] mr-4 text-[10px] text-red-600" />
                    Sheath Warmer
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='mb-5 hover:bg-gray-700'>
                <Link 
                  href={'/'} 
                  className="flex">
                    <MdCircle className="mt-[5px] mr-4 text-[10px] text-red-600" />
                    DataBase
                </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropMenu
