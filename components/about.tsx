'use client'

import React from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/hooks/useSectionInView'

export default function About() {

  const { ref } = useSectionInView('About', 0.75)

  return (
    <motion.section
      className='max-w-[45rem] text-center leading-8 scroll-m-28 mb-28 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15
      }}
      id='about'
      ref={ref}
    >
      <SectionHeader>
        About Me
      </SectionHeader>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">computer sience</span>, I decided to pursue my
        passion for programming. I started learning {" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">JS, React, Next.js</span>
        . I am also familiar with TS, ReduxToolkit, Prisma. I am always looking to
        learn new technologies. 
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and work in the garden.
      </p>
    </motion.section>
  )
}
