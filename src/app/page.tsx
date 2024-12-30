import Intro from '@/components/Intro'
import Services from '@/components/Services'
import React from 'react'
import Testimonials from '@/components/Testimonial'
import CallToAction from '@/components/CallToAction'
import Carousel from '@/components/Carousel'

const page = () => {
  return (
    <div>
     <Carousel/>
      <Intro/>
      <Services/>
      <Testimonials/>
     < div className='py-4'><CallToAction/></div>
     
    </div>
  )
}

export default page



