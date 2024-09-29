
import AP2 from "/public/assets/images/aboutPage/aboutPage_2"
import AP1 from "/public/assets/images/aboutPage/aboutPage_1"
import AP3 from "/public/assets/images/aboutPage/aboutPage_3"

import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div style={{background: '#FFF3F3', fontSize: '12px'}}> 
      <div className="flex justify-center">
        <div className="w-[250px] mt-[140px]">
          <AP1 />
        </div>          
      </div>    
      <div className="flex justify-center mt-20"> 
        <div className="w-96">
            <p>VR: Virtual Reflection, A <br/>Metaphysical Abstract Design LLC Development Firm-Wear, Representing The People And Their Virtual Identity.</p>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-[500px]">
          <AP2 />
        </div>
      </div>
      <div className="flex justify-center mt-20"> 
        <div className="w-[500px]">
            <p>Virtual Reflection intergrates textiles and technology. Install sensors and gain a broader comprehension of your surroundings and intern yourself.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <Image src='/assets/images/aboutPage/About_Page_3.ai.svg' alt="Product Image" width={600} height={600}/>
        </div>  
      </div>
      <div className="flex justify-center"> 
        <div className="w-[500px]">
            <p>Easily install or uninstall VR sensors. Installation manuals available for download</p>
        </div>
      </div> 
      <div className="flex justify-center mt-20">
        <div className="w-[500px]">
          <AP3 />
        </div>
      </div>
      <div className="flex justify-center mt-20"> 
        <div className="w-[500px]">
            <p>All around you there is information. Collect and analyze with VR Sensors.</p>
        </div>
      </div>
      <div className="flex justify-center text-center mt-64"> 
        <div className="w-[500px] mb-[125px]">
            <Link href={''}><u>Sign up</u> for more.</Link>
        </div>
      </div>
    </div>
  )
}

export default page
