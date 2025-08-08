import React from 'react'
import { hero, heroItem } from '../assets/images'
import { containerVariants, wordContainerVariants, wordVariants } from '../utils/animate'
import { motion } from 'framer-motion'

const Hero = () => {
  const text = "Engineered For The Cleanest Standards"
  const words = text.split(" ")
  return (
    <section className={`lg:h-[calc(100vh_-_100px)] h-[calc(100vh_-_70px)] bg-cover bg-center paddingY flex flex-col justify-end`} style={{ backgroundImage: `url(${hero})` }}>
      <motion.div
        className='grid grid-cols-1 lg:grid-cols-5 gap-6 container container-padding !mx-auto'
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
        </motion.div>
        <div className='md:col-span-2 relative'>
          <img src={heroItem} className='w-full hover:scale-105 transition-transform duration-400 ease-out cursor-pointer' />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
