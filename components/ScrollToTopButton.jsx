
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaArrowUpFromBracket } from "react-icons/fa6"


function ScrollToTopButton() {

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    })
  }, [])

  return (
    <div className='button-div'>
      {scrollToTopButton && (
          <Link 
            href='/' 
            style={{textDecoration: 'none'}}
          >
            <span className='fixed bottom-[20px] right-[15px] grid'>
              <FaArrowUpFromBracket className='text-[25px] text-[#999] font-thin bg-transparent border-transparent' />
            </span>
          </Link>
        )}            
    </div>
  )
}

export default ScrollToTopButton
