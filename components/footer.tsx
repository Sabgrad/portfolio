import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-5 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2023 Andriy. All rigth reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website: </span>
        build with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting
      </p>
    </footer>
  )
}
