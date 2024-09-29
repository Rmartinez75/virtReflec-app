import Image from "next/image"

function MobileHomeComp() {
  return (
    <>
        <div className='block'>
            <div className="flex justify-center">
                <hr className="h-[9px] w-[50%] rounded-[25px] bg-[#28231d] mt-5 mb-2" />
            </div>
            <div className="flex justify-center m-3">
                <Image
                    src={'/assets/images/2.webp'}
                    alt="test"
                    width={400}
                    height={100}
                    priority
                />
            </div>
            <div className="m-3">
                <h6 className="mb-2 font-bold text-[14px]">VR: Explorer</h6>
                <p className="flex text-[13px]">Imagine, a returning astronaut coming home to a new world. The VR Air Canvas encompasses an astronaut styled off white canvas puffer with direct openings for sensor placement. Equipped with an environmental carbon sensor, VR Air Canvas offers a glimpse into the world around us. Accurate readings of indoor and outdoor environments provide invaluable insights, allowing you to navigate and connect with your surroundings like never before. Designed to adapt to individual preferences, it can be worn with or without compatible sensors, showcasing the exploration of heavy-duty cotton and its harmonious aging abilities alongside its integrated parts</p>
            </div>
            <div className="mt-10 m-1">
                <Image 
                    src={'/assets/images/schematics/vestSchema.svg'}
                    alt="test"
                    width={500}
                    height={100}
                    priority
                />
            </div>
        </div>
    </>
  )
}

export default MobileHomeComp