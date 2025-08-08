import React, { useState } from 'react'
import { services } from '../constants/data'
import { MoveUpRight } from 'lucide-react';
import { motion } from "framer-motion"
import IndustriesItems from './IndustriesItems';

const Industries = () => {
  const [clickedCardIndex, setClickedCardIndex] = useState(0);

  const handleCardClick = (index) => {
    setClickedCardIndex(index);
  };

  return (
    <section className='bg-secondary text-white'>
      <div className='container container-padding paddingY !mx-auto'>
        <h2 className='sub-head-text paddingY'>Our Industries</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mx-auto text-[#607697]">
          {services.map((service, index) => {
            const isActive = clickedCardIndex === index;
            return (
              <motion.div
                key={index}
                onClick={() => handleCardClick(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`group cursor-pointer p-6 h-full min-h-[400px] 
                bg-[#F8F8F8] hover:bg-tertiary hover:text-white 
                ${isActive ? 'bg-tertiary text-white' : ''} 
                flex flex-col transition-colors duration-300`}
              >
                <div className="mb-4 flex justify-between items-start md:h-auto h-[100px]">
                  <img loading="lazy" src={service.icon} alt={service?.title} className="w-8 h-8 fill-white" />
                  <span
                    className={`text-xs underline text-white flex gap-2 items-center
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${isActive ? 'opacity-100' : ''}`}
                  >
                    READ MORE <MoveUpRight className='w-3 h-3' />
                  </span>
                </div>

                <h3 className="text-xl mb-2 border-b pb-4 lg:pt-[100px] pt-16">{service.title}</h3>
                <p className="text-sm py-3">{service.content}</p>
              </motion.div>
            );
          })}
        </div>

        <IndustriesItems />
      </div>
    </section>
  )
}

export default Industries