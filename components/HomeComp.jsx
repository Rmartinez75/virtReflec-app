
"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";

function HomeComp(props) {
  return (
    <div>
      <div className="flex mt-5 mb-5 justify-center">
      <hr className="h-[9px] w-[99%] rounded-lg bg-[#28231d]" />
      </div>
      <div id={props.id}>
        <div className="hidden lg:flex ml-3">
          <div className="block">
            <div className="flex">
              <div className="p-0.5 rounded-xl">
                <Link href={props.href1}>
                  <Image
                    src={props.src1}
                    alt={props.alt1}
                    width={400}
                    height={250}
                    priority
                  />
                </Link>
              </div>
              <div className="p-0.5 rounded-xl">
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
              <div className="p-0.5 rounded-xl w-[404px]">
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
          <div
            className="box-content h-auto w-1/4 ml-[5%] mr-5"
            style={{ fontSize: "12px" }}
          >
            <p className="text-black">{props.productName}</p> <br />
            <p className="text-black">{props.productDesc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComp