import { careers } from '../assets/images'
import { containerVariants, wordContainerVariants, wordVariants } from '../utils/animate'
import { motion } from 'framer-motion'
import { MoveRight, MoveUpRight } from 'lucide-react'

const Careers = () => {
    const text = "Your Next Role Starts with Bubble"
    const words = text.split(" ")
    return (
        <section className="relative flex flex-col xl:h-[80vh] lg:h-[70vh] md:h-[60vh] h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${careers})` }}>
            <motion.div
                className="flex md:flex-row flex-col-reverse justify-between container container-padding paddingY !mx-auto gap-6 h-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div
                    className='flex-1/2 flex flex-col justify-end '
                    variants={wordContainerVariants}
                >
                    <h1 className='sub-head-text text-[#FFFAEE]'>
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
                        <span className='uppercase'>Let’s Work Together</span>
                        <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                    </a>
                </motion.div>

                {/* Careers navigation section */}
                <div className='flex-1/2 relative h-full w-full text-tertiary overflow-hidden'>
                    <div className='max-w-[322px] w-fit bg-white px-6 py-12 ml-auto cursor-pointer'>
                        <span className='flex items-center gap-2 text-sm'>CAREERS AT BUBBLE<MoveUpRight className='w-4 h-4' /></span>
                        <h6 className='text-2xl'>Grow With Our Team</h6>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Careers