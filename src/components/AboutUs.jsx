import { aboutStats, aboutUsData } from '../constants/data'
import { MoveRight } from 'lucide-react'
import { containerVariants, itemVariants } from '../utils/animate'
import { motion } from "framer-motion"

const AboutUs = () => {
    return (
        <section className='container container-padding !mx-auto paddingY text-tertiary bg-primary'>
            <p className='text-transparent bg-clip-text bg-gradient-to-b from-[#2D72D9] to-[#102542] 2xl:text-5xl lg:text-3xl text-2xl '>{aboutUsData}</p>
            <div className='grid lg:grid-cols-2 gap-10 lg:pt-7 pt-4 text-lg'>
                <div className='lg:pr-6'>
                    <h2 className='sub-head-text lg:pt-[100px] sm:pt-16 pt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2D72D9] to-[#102542] pb-4'>About Us</h2>
                    <p>Bubble Holding LLC is the UAE’s leading laundry solutions provider, operating since 2014. With advanced facilities, certified processes, and a footprint that spans all 7 emirates, we deliver timely and specialized services for hospitality, healthcare, retail, and more.</p>
                    <br />
                    <p>We can proudly say that we run the Middle East’s most advanced laundry infrastructure, including RAL-certified healthcare facilities and smart RFID systems that track every item from pickup to delivery.</p>
                    <a
                        href="#"
                        className="flex justify-between text-sm border-b border-tertext-tertiary !pb-3 max-w-[408px] !pt-12 group"
                    >
                        <span>READ ABOUT OUR LEGACY</span>
                        <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                    </a>
                </div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 m-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {aboutStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`text-left p-6 bg-white`}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div
                                className={`sub-head-text mb-3 `}
                            >
                                {stat.value}
                            </div>

                            <p className="text-md uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default AboutUs