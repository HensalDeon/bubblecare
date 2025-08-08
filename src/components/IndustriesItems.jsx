import React from 'react';
import { greenFuture, healtcareLaundry, tunnelWasher } from '../assets/images';
import { MoveRight } from 'lucide-react';

const IndustriesItems = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 paddingY">
            {/* Left Large Image */}
            <div className="lg:w-2/3 w-full overflow-hidden relative group">
                <img
                    src={greenFuture}
                    alt="Green Future Forum 2024 – Strategic Partner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out cursor-pointer"
                />
                <div className='absolute bottom-0 sm:w-2/3 left-0 paddingB-small px-6'>
                    <h1 className='sm:text-4xl text-2xl text-white'>
                        Green Future Forum 2024 – Strategic Partner
                    </h1>
                    <a
                        href="#"
                        className="long-navigator group"
                    >
                        <span>VIEW ACHIEVEMENT</span>
                        <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                    </a>
                </div>
            </div>

            {/* Right Two Smaller Stacked Images */}
            <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-6">
                <div className="w-full md:flex-1 overflow-hidden relative group">
                    <img
                        src={healtcareLaundry}
                        alt="First RAL-Certified Healthcare Laundry in the Middle East"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out cursor-pointer"
                    />
                    <div className='absolute bottom-0 left-0 paddingB-small px-6'>
                        <h1 className='text-2xl text-white'>
                            First RAL-Certified Healthcare Laundry in the Middle East
                        </h1>
                        <a
                            href="#"
                            className="long-navigator group"
                        >
                            <span>VIEW ACHIEVEMENT</span>
                            <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                        </a>
                    </div>
                </div>
                <div className="w-full md:flex-1 overflow-hidden relative group">
                    <img
                        src={tunnelWasher}
                        alt="Deployed the Region’s First Jensen Medline Tunnel Washer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out cursor-pointer"
                    />
                    <div className='absolute bottom-0 left-0 paddingB-small px-6 '>
                        <h1 className='text-2xl text-white'>
                            Deployed the Region’s First Jensen Medline Tunnel Washer
                        </h1>
                        <a
                            href="#"
                            className="long-navigator group"
                        >
                            <span>VIEW ACHIEVEMENT</span>
                            <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IndustriesItems;
