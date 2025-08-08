import { builfFuture } from "../assets/images";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, wordVariants } from "../utils/animate";

const BuildFuture = () => {
    const text = "Build Your Future With Us";
    const words = text.split(" ");
    return (
        <section className="bg-secondary text-white">
            <div className="container container-padding paddingY !mx-auto">
                <div className="flex md:flex-row flex-col-reverse gap-6 mx-auto text-white w-full h-full items-end">
                    <div className="md:flex-2/3 w-full h-full">
                        <motion.div
                            className="mt-auto lg:w-[90%]"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h2 className="sub-head-text pb-4">
                                {words.map((word, index) => (
                                    <motion.span
                                        key={index}
                                        variants={wordVariants}
                                        className="inline-block whitespace-pre"
                                    >
                                        {word + (index < words.length - 1 ? " " : "")}
                                    </motion.span>
                                ))}
                            </h2>
                            <p className="lg:text-lg">
                                We believe technology drives efficiency, but the real pillar is always our people inside.
                                Over 70% of our team has been with us for more than 15 years. Why? It’s all about the work
                                culture which is rooted in loyalty, innovation, and purpose. Whether it’s serving hospitals,
                                hotels, or retail chains, you’ll be part of something that truly matters. We're a team that
                                stays and grows together.
                            </p>
                            <a
                                href="#"
                                className="flex justify-between text-sm border-b border-tertext-tertiary !pb-3 max-w-[408px] !pt-12 group"
                            >
                                <span className="uppercase">We’d Love to Meet You</span>
                                <MoveRight
                                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                                    size={20}
                                />
                            </a>
                        </motion.div>
                    </div>
                    <div className="md:flex-1/3 overflow-hidden">
                        <img loading="eager" src={builfFuture} alt="build future" className="hover:scale-105 transition-transform duration-400 ease-out" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildFuture;
