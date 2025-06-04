import React from 'react'
import About from './About'
import Statistics from '@/components/homepage/Statistics'
import Adds from '@/components/homepage/Adds'
import Faq from '@/components/homepage/Faq'

const page = () => {
  return (
    <div>
        <About />
        <Statistics />
        <Adds />
        <Faq />
    </div>
  )
}

export default page