'use client'

import dynamic from 'next/dynamic'
import ThreeCanvas from '@/components/ThreeCanvas'

import Navigation from '../src/components/navigation'
import MainContent from '../src/components/MainContent'

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='relative w-full h-screen'>
        <ThreeCanvas className='absolute top-0 left-0 w-full h-full' />
        <div className='absolute top-0 left-0 w-full h-full flex  text-white'>
          {/* NAV */}
          <div className='h-screen flex flex-col'>
            <Navigation />
            {/* <MainContent>{children}</MainContent> */}
          </div>
          {/* CONTENT */}
          <div>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
              <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
                <li className='mb-2'>
                  Get started by editing{' '}
                  <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
                    src/app/page.tsx
                  </code>
                  .
                </li>
                <li>Save and see your changes instantly.</li>
              </ol>

              <div className='flex gap-4 items-center flex-col sm:flex-row'>
                <a
                  className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
                  href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Deploy now
                </a>
                <a
                  className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
                  href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Read our docs
                </a>
              </div>
            </main>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
              <a
                className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn
              </a>
              <a
                className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                Examples
              </a>
              <a
                className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                Go to nextjs.org →
              </a>{' '}
              */ /*{' '}
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
