import React from 'react'
import Contact from './Contact'

const page = () => {
  return (
    <div>
      <Contact />
      <div className="py-6">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="container rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112048.15571039668!2d77.05674354335942!3d28.644598200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8e45851cd5%3A0xd1ca9126b5199fec!2sTek%20Booster!5e0!3m2!1sen!2sin!4v1749202608930!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page