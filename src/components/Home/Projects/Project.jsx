import Image from 'next/image';
import React from 'react';
import One from '@/image/Screenshot_1.png'
import Onee from '@/image/Screenshot_4.png'

const Project = () => {
    return (
      <div>
        <h2 className="text-center font-bold text-3xl  md:text-4xl my-20 ">
          Our Projects
        </h2>
        <div className="flex gap-4">
          <div className=" rounded-md">
            <Image src={One} alt="image" />
          </div>
          <div className=" rounded-md">
            <Image src={Onee} alt="image" />
          </div>
        </div>
        <div className='text-center mt-10'>
          <button className="btn_primary">Show All</button>
        </div>
      </div>
    );
};

export default Project;