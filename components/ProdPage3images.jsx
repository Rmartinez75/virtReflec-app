
import React from 'react'

function ProdPage3images() {
  return (
    <>
        <div className='flex justify-center items-center max-w-full'>
            <div className="flex min-w-0 max-w-full">
                <div className="block ml-10" style={{width: '75%'}}>
                <div className="flex">
                    <div className="flex w-[900px] min-w-0">
                    <div className='max-w-full mt-8'>
                        <Carousel autoSlide={true} autoSlideInterval={8500}>
                            {largeImageSlides.map((s, i) => (
                            <img src={s} key={i} className="max-w-full"/>
                            ))}
                        </Carousel>
                    </div>              
                    </div>
                    <div className="mt-8 ml-2 w-[319px]">
                    <div>
                        <div className='mb-2'>
                        <Carousel autoSlide={true} autoSlideInterval={8250}>
                            {smallTopSlides.map((s, i) => (
                            <img src={s} key={i} className="max-w-full"/>
                            ))}
                        </Carousel>
                        </div>
                        <div>
                        <Carousel autoSlide={true} autoSlideInterval={8000}>
                            {smallBottomSlides.map((s, i) => (
                            <img src={s} key={i} className="max-w-full"/>
                            ))}
                        </Carousel>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mt-5 w-auto">
                    <VestSchematics />
                </div>
                </div>
                <div className='w-auto ml-5 mr-10'>
                <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
                    <p className="font-bold" style={{fontSize: '14px'}}>
                    VR: AIR EXPLORER
                    </p>
                    <br />
                    <p style={{fontSize: '12px'}}>
                    DESCRIPTION
                    </p>
                    <br />
                    <p style={{fontSize: '12px'}}>
                    Explore where no one else has, like no one else has with the VR Air Explorer. Users are able to enjoy comfort alongside ample storage space. The Explorer features a unique blend of nylon and suede. This device was designed for specialty sensors that may be bigger in size or require a bigger storage as well as external access making installation a lot easier. Install and begin your journey.  
                    </p>
                    <br />
                    <br />
                    <br />
                    <p style={{fontSize: '12px'}}>
                    TEXTILE
                    </p>
                    <br />
                    <p style={{fontSize: '12px'}}>
                    Synthetic Neoprene, Nylon, flux suede 
                    </p>
                    <br />
                    <br />
                    <br />
                    <p style={{fontSize: '12px'}}>
                    TECHNOLOGY 
                    </p>
                    <br />
                    <p style={{fontSize: '12px'}}>
                    Varies
                    </p>
                    <br />
                    <br />
                    <br />
                    <div className='flex' style={{fontSize: '12px'}}>
                    <p className='flex' style={{fontSize: '12px'}}>
                        SIZE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; TYPE:&nbsp; &#160;&nbsp; &#160;&nbsp; &#160; 
                        <RegisterLink postLoginRedirectURL='/dashboard' className='flex'>
                            GET NOTIFIED:
                        </RegisterLink>
                        &#160;&nbsp; EMAIL HERE
                    </p>              
                    </div>
                    <br />
                    <br />
                    <p style={{fontSize: '12px'}}>DOWNLOAD OPTIONS: FOR OPEN SOURCE ADD EMAIL FOR DOWNLOAD</p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProdPage3images
