import loadblogs from '@/util/loadblogs';
import Image from 'next/image';
import React from 'react';

const Blogs = async () => {
    const blogs = await loadblogs()

    return (
      <div>
        <h2 className="text-center font-bold text-3xl  md:text-4xl my-20 ">
          Popular Blog Post
        </h2>
        <div className='md:flex gap-3 space-y-6 md:spacey-0'>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <img src={blog.image} alt="image" width={300} className='rounded-xl'  />
                  <h3 className='text-xl font-bold my-4'>{blog.title}</h3>
              <p className='text-base font-semibold'>{blog.des}</p>
              <button className='btn_primary mt-5'>READ MORE</button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Blogs;