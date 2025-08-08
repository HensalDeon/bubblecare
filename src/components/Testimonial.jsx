import { testimonials } from "../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";

const Testimonial = () => {
    return (
        <section className="w-full bg-primary paddingY container container-padding mx-auto">
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                className="relative"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="mx-auto text-left">
                            <p className="xl:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#314A70] to-[#1D2A3E] xl:mb-14 mb-10">
                                “{item.quote}”
                            </p>
                            <div className="flex items-end gap-4">
                                <img src={item.image} alt={item.name} className="" />
                                <div className="text-left text-tertiary">
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-xs uppercase tracking-wide">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Minimal styled navigation buttons */}
                <div className="absolute xl:bottom-24 bottom-16 right-6 flex gap-8 z-[999] text-white">
                    <button className="cursor-pointer group custom-prev w-[40px] h-[40px] text-sm bg-[#C6C6C6] flex justify-center items-center rounded-sm transition-all">
                        <MoveLeft
                            className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
                            size={10}
                        />
                    </button>
                    <button className="cursor-pointer group custom-next w-[40px] h-[40px] text-sm bg-[#C6C6C6] flex justify-center items-center rounded-sm transition-all">
                        <MoveRight
                            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                            size={10}
                        />
                    </button>
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonial;
