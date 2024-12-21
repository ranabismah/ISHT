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
     < div className='py-4'><CallToAction/></div>
     
    </div>
  )
}

export default page



