import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Navbar from '@/components/Navbar'
import React from 'react'
import Testimonials from '@/components/Testimonial'
import CallToAction from '@/components/CallToAction'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default page



