import React from 'react';
import One  from '@/image/service/One.png'
import Two  from '@/image/service/two.png'
import Three  from '@/image/service/three.png'
import Image from 'next/image';
const Services = () => {
    return (
      <div>
        <h2 className="text-center font-bold text-3xl  md:text-4xl my-20 ">
          Solutions we provide
        </h2>
        <div className="md:flex gap-8 space-y-6 md:space-y-0 ">
          <div className="text-center space-y-3">
            <Image src={One} alt="Image" className="mx-auto" />
            <h3 className="text-2xl font-[700]">User experience design</h3>
            <p className="text-[18px] font-[500]">
              World-class user experiences with pixel-perfect user interface
              designs for your digital products.
            </p>
          </div>
          <div className="text-center space-y-3">
            <Image src={Two} alt="Image" className="mx-auto" />
            <h3 className="text-2xl font-[700]">Web development </h3>
            <p className="text-[18px] font-[500]">
              Custom design and development solutions for crafting the perfect
              website or app for your business
            </p>
          </div>
          <div className="text-center space-y-3">
            <Image src={Three} alt="Image" className="mx-auto" />
            <h3 className="text-2xl font-[700]">Seo Services</h3>
            <p className="text-[18px] font-[500]">
              Outrank your competitor and improve search visibility to increase
              the quality & quantity of traffic
            </p>
          </div>
        </div>
      </div>
    );
};

export default Services;