import React from 'react'
import Button from './Button'

export default function Hero() {    
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>WORK<span className='text-blue-400'>OUT</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>
            I hereby acknowledge my commitment to a{' '}
            <span className='text-blue-400 font-medium'>healthier</span>,{' '}
            <span className='text-blue-400 font-medium'>stronger</span>, and{' '}
            <span className='text-blue-400 font-medium'>fitter</span> version of myself. Every workout is a step closer to my goals, and I am dedicated to pushing my limits and achieving greatness.
            </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
