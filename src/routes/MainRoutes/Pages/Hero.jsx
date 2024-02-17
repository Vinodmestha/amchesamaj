import React from 'react'
import heroImage from "../../../assets/icons/hero.png"

import Container from '../../../components/container'

export default function Hero() {
    return (
        <Container>
            <div className=' flex items-center pt-20'>
                <div className='w-1/2 '>
                    <h1 className='text-6xl font-bold text-green-100 leading-[75px]'>Amche Samaj Che <span className='text-orange-600'>Matrimony</span></h1>
                    <p className='text-white text-xl my-4'>Now find matches based on your hobbies & interests</p>
                    <button className='text-white text-lg border-2 border-orange-500 px-6 py-2 mt-10 rounded-full rounded-br-none hover:bg-opacity-95 transition-all duration-300 '>Register</button>
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div className='bg-orange-500 h-[500px] w-[500px] rounded-full p-2'>
                        <div className='bg-green-200 h-[500px] w-[500px] rounded-full'>
                            <img src={heroImage} alt="hero" className='w-full h-[500px]' />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
