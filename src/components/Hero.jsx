import React from 'react'
import { hero, heroItem } from '../assets/images'
import { containerVariants, wordContainerVariants, wordVariants } from '../utils/animate'
import { motion } from 'framer-motion'
import { MoveRight, MoveUpRight } from 'lucide-react'

const Hero = () => {
  const text = "Engineered For The Cleanest Standards"
  const words = text.split(" ")
  return (
    <section className={`lg:min-h-[calc(100vh_-_100px)] min-h-[calc(100vh_-_70px)] bg-cover bg-center  flex flex-col justify-end`} style={{ backgroundImage: `url(${hero})` }}>
      <motion.div
        className='grid grid-cols-1 lg:grid-cols-5 gap-6 container container-padding paddingY !mx-auto'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className='md:col-span-3'
          variants={wordContainerVariants}
        >
          <h1 className='head-text text-[#FFFAEE]'>
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block whitespace-pre"
              >
                {word + (index < words.length - 1 ? " " : "")}
              </motion.span>
            ))}
          </h1>
          <a
            href="#"
            className="flex justify-between text-sm text-[#FFFAEE] border-b border-[#FFFAEE] !pb-3 max-w-[408px] !pt-12 group"
          >
            <span>START EXPLORING</span>
            <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
          </a>
        </motion.div>
        <div className='md:col-span-2 relative h-fit text-white overflow-hidden'>
          <img loading="lazy" src={heroItem} className='w-full hover:scale-105 transition-transform duration-400 ease-out cursor-pointer' />
          <div className='absolute xl:bottom-7 bottom-4 xl:left-7 left-4'>
            <span className='flex items-center gap-2'>2025 GOAL<MoveUpRight className='w-4 h-4' /></span>
            <h6 className='text-2xl'>Inside Bubble Holding</h6>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
