import { langSwitcher } from "../assets/images";
import { navOptions } from "../constants/data";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import useNavbar from "../hooks/useNavbar";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const { menuOpen, currentPath, handleMenu } = useNavbar();
    return (
        <nav className="bg-tertiary w-full fixed top-0 left-0 text-[#FFFAEE] lg:h-[100px] h-[70px] z-20">
            <div className="px-4 py-3 flex justify-between items-center w-full h-full container !mx-auto container-padding">
                {/* Brand */}
                <div className="xl:text-2xl text-xl">
                    <span>Bubblecare Holdings</span>
                </div>

                {/* Menu */}
                <ul className="hidden lg:flex justify-center items-center xl:gap-[50px] lg:gap-[25px] xl:text-md lg:text-sm">
                    {navOptions.map((option) => (
                        <li
                            key={option?.label}
                            className={`relative cursor-pointer text-sm transition duration-300 ${
                                currentPath === option?.link
                                    ? "text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-current"
                                    : "hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            }`}
                        >
                            <Link to={option?.link}>{option?.label?.toUpperCase()}</Link>
                        </li>
                    ))}
                </ul>

                {/* Language Switcher */}
                <div className="hidden lg:flex gap-2 text-[#C6C6C6] justify-center items-center xl:text-md lg:text-sm">
                    <span>ENGLISH TO ARABIC</span> <img loading="lazy" src={langSwitcher} alt="Language Switcher" className="w-5 h-5" />
                </div>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden flex">
                    <button onClick={handleMenu} className="text-white cursor-pointer" aria-label="menu">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 256, opacity: 1 }} 
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:hidden bg-tertiary text-white container-padding overflow-hidden !py-4"
                    >
                        <ul className="flex flex-col gap-4">
                            {navOptions.map((option) => (
                                <li key={option.label} className="pb-2">
                                    <Link to={option?.link} onClick={handleMenu}>{option?.label?.toUpperCase()}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="!mt-4 flex items-center gap-2 text-[#C6C6C6]">
                            <span>ENGLISH TO ARABIC</span>
                            <img loading="lazy" src={langSwitcher} alt="Language Switcher" className="w-5 h-5" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
