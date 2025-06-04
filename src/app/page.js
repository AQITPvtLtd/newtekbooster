import About from '@/components/homepage/About'
import Banner from '@/components/homepage/Banner'
import Bookmeeting from '@/components/homepage/Bookmeeting'
import Faq from '@/components/homepage/Faq'
import Partners from '@/components/homepage/Partners'
import Services from '@/components/homepage/Services'
import Testimonials from '@/components/homepage/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Partners />
      <Bookmeeting />
      <Testimonials />
      <Faq />
    </div>
  )
}

export default page