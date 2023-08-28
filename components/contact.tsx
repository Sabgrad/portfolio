'use client'

import { useSectionInView } from '@/hooks/useSectionInView'
import React from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import { toast } from 'react-hot-toast'

export default function Contact() {

  const { ref } = useSectionInView('Contact', 0.5)

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeader>
        Contact Me
      </SectionHeader>
      <p className='text-gray-800 -mt-6 dark:text-white/80'>
        Please contact me direcly at{' '}
        <a className='underline' href='mailto:andrey.zhmudenko1@gmail'>andrey.zhmudenko1@gmail</a>{' '}
        or through this form.
      </p>
      <form className='mt-10 flex flex-col dark:text-black' action={async (formData) => {
        const { data, err } = await sendEmail(formData)

        if (err) {
          toast.error(err)
        } else {
          toast.success('Email sent successfully')
        }
      }}
      >
        <input type='email' name='email' required maxLength={256} placeholder='Yout email' className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80
        dark:focus:bg-opacity-100 transition-all dark:outline-none' />
        <textarea placeholder='Your message' name='message' required maxLength={1024} className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80
        dark:focus:bg-opacity-100 transition-all dark:outline-none' />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}