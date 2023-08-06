import React from 'react';
import Img from "@/image/news-3.webp";
import Image from 'next/image';

const Subscribe = () => {
    return (
      <div className="lg:flex items-center justify-between bg-[#453ef0] px-9 py-10 rounded-xl mt-20">
        <div>
          <h2 className="font-bold text-3xl mb-5 text-white ">
            Subscribe newslater get latest <br className='hidden lg:block' /> updates and deals
          </h2>
          <div className='lg:flex
          '>
            <input
              placeholder="Enter your mail"
              className="border outline-none px-4 py-4 w-full rounded-lg text-white bg-[#6461ff]"
            />
            <button className="btn_primary font-bold text-black bg-[#ffdd60] relative md:right-14 my-6 lg:my-0 ">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <Image src={Img} alt="image" width={150} />
        </div>
      </div>
    );
};

export default Subscribe;