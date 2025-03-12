import React from 'react'
import Hero from '../../student/Hero'
import Companies from '../../student/Companies'
import CourseSection from '../../student/CourseSection'
import TestomonialSection from '../../student/TestomonialSection'
import CallToAction from '../../student/CallToAction'
import Footer from '../../student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <TestomonialSection />
      <CallToAction />
      <Footer/>
    </div>
  )
}

export default Home