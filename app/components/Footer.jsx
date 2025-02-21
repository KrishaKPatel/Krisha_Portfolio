import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-center sm:flex items-center justify-between border-t border-navColor mt-2 py-2'>
      <p className='font-Ovo text-navColor ml-5 font-bold'>© Krisha Patel. All rights reserved.</p>

      <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 mr-5'>
        <li>
          <a href='mailto:patelkrisha114@yahoo.com' className='font-Ovo text-navColor font-bold cursor-pointer'>
            E-mail
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/krishakpatel/' target='_blank' rel='noopener noreferrer' className='font-Ovo text-navColor font-bold cursor-pointer'>
            LinkedIn
          </a>
        </li>
        <li>
          <a href='https://github.com/KrishaKPatel' target='_blank' rel='noopener noreferrer' className='font-Ovo text-navColor font-bold cursor-pointer'>
            GitHub
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Footer
