import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "../utils/animate";

const JobCard = ({ title, description, tags }) => {
    return (
        <motion.div className="border-t border-tertiary py-8" variants={itemVariants}>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex xl:flex-row flex-col justify-between xl:items-center xl:pb-0 pb-6 gap-x-4">
                <p className="text-md text-gray-600 py-4 flex-2/3">{description}</p>
                <a
                    href="#"
                    className="flex justify-between text-sm border-b border-tertext-tertiary !pb-3 max-w-[408px] flex-1/3 h-fit group"
                >
                    <span className="uppercase">We’d Love to Meet You</span>
                    <MoveRight
                        className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        size={20}
                    />
                </a>
            </div>
            <div className="flex gap-4">
                {tags.map((tag, index) => (
                    <span key={index} className="px-6 py-3 text-xs bg-[#F8F8F8]">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default JobCard;
