import React from 'react';
import Img from '@/image/service/hola.png'
import Image from 'next/image';
import  one from '@/image/Group 13.png'
import  two from '@/image/Group 14.png'
import  three from '@/image/Group 16.png'
const Choose = () => {
    return (
      <div className="lg:flex justify-between items-center mt-24">
        <div className='mb-10 md:mb-0'>
          <Image src={Img} alt="image" width="582px" height={585} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#DFC450] rounded-full"></div>
            <h4 className="font-bold text-[18px">Why Choose us</h4>
          </div>
          <h2 className=" text-3xl md:text-4xl font-bold  my-5">
            Specialist in aviding clients
            <br  className='hidden md:block'/> of financial challenges
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <Image src={one} />
            </div>
            <div>
              <h3 className="text-2xl font-[600]">Fast working process</h3>
              <p className="font-[500] mt-2">
                At StudyMonk we specialize in designing,
                <br /> building,shipping and scaling beautifu.
              </p>
            </div>
          </div>{" "}
          <div className="flex items-center gap-4 my-5">
            <div>
              <Image src={two} />
            </div>
            <div>
              <h3 className="text-2xl font-[600]">Didicated team</h3>
              <p className="font-[500] mt-2">
                At StudyMonk we specialize in designing,
                <br /> building,shipping and scaling beautifu.
              </p>
            </div>
          </div>{" "}
          <div className="flex items-center gap-4 ">
            <div>
              <Image src={three} />
            </div>
            <div>
              <h3 className="text-2xl font-[600]">24/7 hours support</h3>
              <p className="font-[500] mt-2">
                At StudyMonk we specialize in designing,
                <br /> building,shipping and scaling beautifu.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Choose;