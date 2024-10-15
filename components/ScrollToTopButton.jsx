
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiUpArrowCircle } from "react-icons/bi";


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
    <div className='scroll-smooth'>
      {scrollToTopButton && (
          <Link 
            href='#top' 
            style={{textDecoration: 'none'}}
          >
            <span className='fixed bottom-[20px] right-[15px] grid'>
              <BiUpArrowCircle className='text-[40px] text-[#999] font-thin bg-transparent border-transparent' />
            </span>
          </Link>
        )}            
    </div>
  )
}

export default ScrollToTopButton
