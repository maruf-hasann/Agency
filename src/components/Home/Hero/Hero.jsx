import React from 'react';
import heroImg from "@/image/hero-5.webp";
import Image from "next/image";
const Hero = () => {
    return (
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:py-16">
        <div className='text-center md:text-left space-y-5'>
          <h2 className="text-4xl lg:text-7xl font-bold text-[#292930]">
            Building Digital Product, Brand <br className='hidden lg:block' /> and Experience
          </h2>
          <p className="text-xl font-[500] text-[#292930]">
            We’re an award winning full-service, creative digital agency,
            collaborating with brands all over the world.
          </p>
          <button className="btn_primary">CONTACT US</button>
        </div>
        <div className='my-10 md:my-0'>
          <Image src={heroImg} alt="hero" />
        </div>
      </div>
    );
};

export default Hero;