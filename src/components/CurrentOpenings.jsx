import React from 'react'
import { jobs } from '../constants/data';
import JobCard from './JobCard';

const CurrentOpenings = () => {
    return (
        <section className='bg-white text-tertiary'>
            <div className='container container-padding paddingY !mx-auto'>
                <div className="flex lg:flex-row flex-col gap-6 mx-auto w-full h-full items-start">
                    <div className="md:flex-1/3">
                        <h2 className='sub-head-text pb-4'>Current Openings</h2>
                        <p className='lg:text-lg lg:w-[90%]'>We’re always looking for people who want to contribute to something bigger. Explore our latest openings and be a part of our company.</p>
                    </div>
                    <div className="md:flex-2/3 w-full h-full border-b border-tertiary">
                        {jobs?.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentOpenings