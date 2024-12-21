import Intro from '@/components/Intro'
import Services from '@/components/Services'
import React from 'react'
import Testimonials from '@/components/Testimonial'
import CallToAction from '@/components/CallToAction'

const page = () => {
  return (
    <div>
     
      <Intro/>
      <Services/>
      <Testimonials/>
      <CallToAction/>
     
    </div>
  )
}

export default page



