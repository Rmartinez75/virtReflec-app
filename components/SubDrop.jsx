
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link";

  import { MdCircle } from "react-icons/md";
  import { PiArrowLineDownRightFill } from "react-icons/pi";
  

function SubDrop() {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger className='flex focus:outline-none mb-5 ml-[7px] hover:bg-gray-700'>
                <MdCircle className="mt-[5px] mr-4 text-[10px] text-red-600" />
                Vest
                <PiArrowLineDownRightFill className="ml-[75px] mt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='ml-[450px] rounded-[10px] shadow-2xl bg-[#FFF3F3]'>
                <DropdownMenuItem className="hover:bg-gray-700">
                    <Link href={'/'} className='flex'>
                        <MdCircle className="mt-[5px] mr-4 text-[10px] text-gray-600" />
                        VR: Air Canvas
                    </Link>                    
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">
                    <Link 
                        href={'/'} 
                        className='flex'>
                        <MdCircle className="mt-[5px] mr-4 text-[10px] text-gray-600" />
                        VR: Air Exporer
                    </Link>                      
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">
                    <Link 
                        href={'/'} 
                        className='flex'>
                        <MdCircle className="mt-[5px] mr-4 text-[10px] text-gray-600" />
                        VR: Air Carbon
                    </Link>                      
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">
                    <Link 
                        href={'/'} 
                        className='flex'>
                        <MdCircle className="mt-[5px] mr-4 text-[10px] text-gray-600" />
                        VR: Air Golden Leaf
                    </Link>                     
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">
                    <Link 
                        href={'/'} 
                        className='flex'>
                        <MdCircle className="mt-[5px] mr-4 text-[10px] text-gray-600" />
                        VR: Air Bubble Black
                    </Link>                     
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">
                    <Link 
                        href={'/'} 
                        className='flex'>
                        <MdCircle className="mt-[5px] mr-4 text-[10px] text-gray-600" />
                        VR: Terrain 1S
                    </Link>                     
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default SubDrop