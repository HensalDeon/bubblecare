import React from "react";
import { Link } from "react-router-dom";
import { bottomFooter, footerContent, footerLinks, socialLinks } from "../constants/data";
import { MoveRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white text-tertiary relative w-full">
            <div className="container !mx-auto container-padding paddingY">
                <div className="mx-auto px-4 sm:px-8 py-12 grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
                    {/* Left Section: About */}
                    <div className="md:col-span-1">
                        <p className="text-sm leading-relaxed">{footerContent}</p>
                        <a
                            href="#"
                            className="flex justify-between text-sm text-tertiary border-b border-tertiary !pb-3 w-full !pt-12 group"
                        >
                            <span>READ ABOUT OUR LEGACY</span>
                            <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={20} />
                        </a>
                    </div>

                    {/* Middle Section: Links */}
                    <div className="md:col-span-1 grid grid-cols-3 gap-6 text-sm h-fit">
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
                    <div className="md:col-span-1 grid xs:grid-cols-2 2xl:gap-x-8 gap-4 text-sm w-fit h-fit">
                        {socialLinks?.map((option) => (
                            <div key={option?.alt} className="flex h-fit gap-x-3 items-center !py-4 !px-6 bg-primary cursor-pointer">
                                <img src={option?.icon} alt={option?.alt} className="w-4 h-4" />
                                {option?.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black text-white text-sm lg:h-[100px] h-[70px] -lg:bottom-[100px] -bottom-[70px] absolute w-full left-0 flex items-center justify-center">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 !py-3 container-padding">
                    <p>Designed By FireFly Agency</p>
                    <div className="flex gap-4">
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
