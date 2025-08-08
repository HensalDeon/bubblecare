import React from 'react'
import { life } from '../assets/images'
import { companyValues } from "../constants/data"
export const LifeAtBubble = () => {
    return (
        <section className='bg-secondary text-white'>
            <div className='container container-padding paddingY !mx-auto'>
                <div className="flex xl:flex-row flex-col justify-center gap-6 mx-auto text-white w-full h-full xl:items-center">
                    <div className="md:flex-1/3">
                        <img src={life} alt="build future" className='xl:block hidden'/>
                    </div>
                    <div className="md:flex-2/3 w-full h-full">
                        <div className='lg:w-[90%] xl:ml-auto'>
                            <h2 className='sub-head-text pb-4'>Life at Bubble</h2>
                            <ul className='grid sm:grid-cols-2 xl:gap-16 gap-10'>
                                {companyValues?.map((option) => (
                                    <li key={option?.title} className='flex flex-col gap-4'>
                                        <img src={option?.icon} alt={option?.title} className='w-fit h-fit' />
                                        <p className='text-2xl'>{option?.title}</p>
                                        <p className='text-lg'>{option?.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
