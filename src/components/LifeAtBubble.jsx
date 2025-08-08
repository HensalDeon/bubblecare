import React from "react";
import { life } from "../assets/images";
import { companyValues } from "../constants/data";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/animate";
export const LifeAtBubble = () => {
    return (
        <section className="bg-secondary text-white">
            <div className="container container-padding paddingY !mx-auto">
                <div className="flex xl:flex-row flex-col justify-center gap-6 mx-auto text-white w-full h-full xl:items-center">
                    <div className="md:flex-1/3 relative xl:block hidden overflow-hidden">
                        <img
                            loading="lazy"
                            src={life}
                            alt="build future"
                            className="hover:scale-105 transition-transform duration-400 ease-out"
                        />
                        <div className="absolute xl:bottom-7 bottom-4 left-0 px-4">
                            <span className="flex items-center gap-2">
                                2025 GOAL
                                <MoveUpRight className="w-4 h-4" />
                            </span>
                            <h6 className="text-xl">A Clean Standard, Built on People</h6>
                        </div>
                    </div>
                    <div className="md:flex-2/3 w-full h-full">
                        <div className="lg:w-[90%] xl:ml-auto">
                            <h2 className="sub-head-text pb-4">Life at Bubble</h2>
                            <motion.ul
                                className="grid sm:grid-cols-2 xl:gap-16 gap-10"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {companyValues?.map((option) => (
                                    <motion.li className="flex flex-col gap-4" key={option?.title} variants={itemVariants}>
                                        <img
                                            loading="lazy"
                                            src={option?.icon}
                                            alt={option?.title}
                                            className="w-fit h-fit"
                                        />
                                        <p className="text-2xl">{option?.title}</p>
                                        <p className="text-lg">{option?.description}</p>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
