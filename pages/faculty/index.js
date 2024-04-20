import ServiceSlider from "../../components/ServiceSlider-f";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// icons
// import {
//   RxCrop,
//   RxPencil2,
//   RxDesktop,
//   RxReader,
//   RxRocket,
//   RxArrowTopRight,
// } from "react-icons/rx";

// // data
// const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: "Branding",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxPencil2 />,
//     title: "Design",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxDesktop />,
//     title: "Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxReader />,
//     title: "Copywriting",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxRocket />,
//     title: "SEO",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

const Services = () => {
  return (
    <div className="h-full bg-white-200 py-36 flex items-center">
      <div className="conatiner mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
          >
            <h2 className="h2 text-white xl:mt-8">
              Faculty of <span className="text-accent">EESA.</span>{" "}
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Meet the faculty of EESA, leading the way in electrical and computer science engineering innovation with passion and dedication, shaping the future of tech.
            </p>
            <div
              className="z-50  cursor-pointer justify-center flex items-center rounded-md
                  text-white black bg-accent font-semibold
               hover:border-accent hover:text-accent hover:bg-white 
                 h-[30px] w-[230px] items-center"
            >
              <a href="../team">&lt;!--Meet the Team of EESA--&gt;</a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:w-[800px] w-[400px]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
