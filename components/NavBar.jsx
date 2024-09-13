
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  return (
    <>
        {/* CREATE TOP BAR */}
        <div className='lg:sticky top-0 bg-[#28231d] text-[#afaeae] text-[13px]'>
            <div className='flex lg:justify-between lg:items-center py-2'>
                {/* LOGO AND COMPANY NAME DIV */}
                <div className='text-center ml-[25px] p-[10px]'>
                    <Link href={'/'} className='flex gap-2'><Image src='/assets/images/logo5.png' alt='LOGO' width={25} height={20} className='object-contain' />
                        Metaphysical Abstract Design
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar
