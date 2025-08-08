import React from "react";
import { Link } from "react-router-dom";
import { bottomFooter, footerContent, footerLinks, socialLinks } from "../constants/data";
import { MoveRight } from "lucide-react";
import { itemVariants } from "../utils/animate";
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="bg-white text-tertiary relative w-full">
            <div className="container !mx-auto paddingY container-padding">
                <div className="mx-auto py-12 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                    {/* Left Section: About */}
                    <div className="md:col-span-1">
                        <p className="text-sm leading-relaxed">{footerContent}</p>
                        <a
                            href="#"
                            className="flex justify-between text-sm text-tertiary border-b border-tertiary !pb-3 w-full max-w-[408px] !pt-12 group"
                        >
                            <span>READ ABOUT OUR LEGACY</span>
                            <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                        </a>
                    </div>

                    {/* Middle Section: Links */}
                    <div className="md:col-span-1 grid grid-cols-3 gap-6 text-sm h-fit xl:mx-6">
                        {footerLinks?.map((option) => (
                            <div className="space-y-2" key={option}>
                                <Link
                                    href="#"
                                    className="block relative text-sm after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {option}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="grid xl:grid-cols-2 grid-cols-4  gap-4 text-sm w-fit h-fit">
                        {socialLinks?.map((option) => (
                            <motion.div key={option?.alt} className="flex h-fit gap-x-3 items-center !py-4 !px-6 bg-primary cursor-pointer"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <img src={option?.icon} alt={option?.alt} className="w-4 h-4" />
                                <span className="xl:block hidden">{option?.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black text-white text-sm lg:min-h-[100px] min-h-[70px] -lg:bottom-[100px] -bottom-[70px] absolute w-full left-0 flex items-center justify-center">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 py-3 container-padding">
                    <p>Designed By FireFly Agency</p>
                    <div className="flex gap-x-4 w-fit flex-wrap justify-center sm:pt-0 pt-3">
                        {bottomFooter?.map((option) => (
                            <Link to="#" key={option} className="hover-line">
                                {option}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
