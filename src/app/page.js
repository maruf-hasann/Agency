import Blogs from '@/components/Home/Blogs/Blogs'
import Choose from '@/components/Home/Choose/Choose'
import Footer from '@/components/Home/Footer/Footer'
import Hero from '@/components/Home/Hero/Hero'
import Navbar from '@/components/Home/Navbar/Navbar'
import Subscribe from '@/components/Home/NewsLetter/Subscribe'
import Project from '@/components/Home/Projects/Project'
import Services from '@/components/Home/Service/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='my_container'>
      <Navbar/>
      <Hero />
      <Services />
      <Choose />
      <Project />
      <Subscribe/>
      <Blogs />
      <Footer/>
  </div>
  )
}
