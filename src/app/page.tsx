'use client'

const About = dynamic(() => import('@/components/About'))
const Contact = dynamic(() => import('@/components/Contact'))
const Experience = dynamic(() => import('@/components/Experience'))
const Hero = dynamic(() => import('@/components/Hero'))
const Portfolio = dynamic(() => import('@/components/Portfolio'))
const Skills = dynamic(() => import('@/components/Skills'))
const Sosial = dynamic(() => import('@/components/Sosial'))
import UpBtn from '@/components/UpBtn'
import dynamic from 'next/dynamic'

const Page: React.FC = () => {

  return (
    <main>
      <UpBtn />
      <div className='container'>
        <Hero />
        <Sosial />
        <About />
        <Skills />
        <Experience />
      </div>
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Page;
