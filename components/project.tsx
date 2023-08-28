'use client'

import { projectsData } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl
}: ProjectProps) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section
        className='bg-gray-100 max-w-[42rem] borderBlack overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition rounded-lg 
        dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
        <div className='px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-2 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] sm:group-even:pl-8'>
          <h3 className='text-wxl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag) =>
              <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={tag}>
                {tag}
              </li>
            )}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='project image'
          quality={95}
          className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 
          group-hover:-rotate-2 group-hover:scale-110 group-even:group-hover:-translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition
          hidden sm:block'
        />
      </section>
    </motion.div>
  )
}