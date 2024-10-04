
"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";


function DeskProdHomePage(props) {
  return (
    <>
      <div className="flex mt-5 mb-5 justify-center">
        <hr className="h-[9px] w-[50%] lg:w-[99%] rounded-[25px] bg-[#28231d] mt-5 mb-0 lg:mt-1 lg:mb-1" />
      </div>
      <div id={props.id}>
        <div className="block lg:flex m-1 lg:ml-3">
          <div className="block">
            <div className="flex">
              <div className="p-0.5 rounded-xl">
                <Link href={props.href1}>
                  <Image
                    className="hidden lg:flex"
                    src={props.src1}
                    alt={props.alt1}
                    width={400}
                    height={250}
                    priority
                  />
                  <Image
                    className="block lg:hidden"
                    src={props.src1}
                    alt={props.alt1}
                    width={400}
                    height={250}
                    priority
                  />
                </Link>
              </div>
              <div className="hidden lg:flex p-0.5 rounded-xl">
                <Link href={props.href2}>
                  <Image
                    src={props.src2}
                    alt={props.alt2}
                    width={400}
                    height={250}
                    priority
                  />
                </Link>
              </div>
              <div className="hidden lg:flex p-0.5 rounded-xl w-[404px]">
                <Carousel autoSlide={true} autoSlideInterval={3500}>
                  {props.slides.map((s, i) => (
                    <Image
                      src={s}
                      key={i}
                      alt={"Product Image"}
                      width={500}
                      height={400}
                      priority
                    />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="hidden lg:flex">
              <div className="ml-16 mt-5">
                <Image
                  src={props.schematicsrc}
                  alt={props.schematicalt}
                  width={props.width}
                  height={props.height}
                  priority
                />
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="box-content h-auto lg:w-1/4 ml-[5%] mr-5" style={{ fontSize: "12px" }}>
            <p className="text-black font-extrabold">{props.productName}</p> <br />
            <p className="hidden lg:flex text-black">{props.productDesc}</p>
            <p className="block lg:hidden text-black">{props.productDesc2}</p>
          </div>
          <div className="block lg:hidden">
              <div className="mt-[75px]">
                <Image
                  src={props.schematicsrc}
                  alt={props.schematicalt}
                  width={props.width}
                  height={props.height}
                  priority
                />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeskProdHomePage;