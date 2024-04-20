import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { CgProfile } from "react-icons/cg";
import { HiAcademicCap } from "react-icons/hi";
import { FaChalkboardTeacher } from "react-icons/fa"


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxMix,
  RxFramerLogo,
} from "react-icons/rx";
import { FaGears } from "react-icons/fa6";
// data
const serviceData = [
  {
    icon: <HiAcademicCap    />,
    title: "Dr.Arun Chavan",
    link: "https://www.instagram.com/haarshrajputt/",
    description: "Head Of Department (ExCS).",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Prof.Nayna Mahajan",
    link: "https://www.instagram.com/udayamballa/",
    description: "Conveyor of EESA",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Prof.Anmol Sakharkar",
    link: "https://www.instagram.com/udayamballa/",
    description: "Co-conveyor of EESA",
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" h-[240px] xl:h-[300px] bg-[rgba(0,0,0,0.5)]  rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer text-white xl:hover:bg-[rgb(89,68,157)] transition-all duration-500 ">
              {/**/}
              <div className="text-accent text-4xl">{item.icon}</div>
              {/**/}
              <div className="text-white">
                <div className="text-2xl">{item.title}</div>
                <p className=" font-bold text-accent ">{item.description}</p>
                {/* <p className="text-white font-bold text-sm">{item.core}</p> */}
                <p className="text-sm">{item.c_member}</p>
                <br className="bg-primary-300 h-[10px] w-[50px]"></br>
                {/* <p>{item.extendee}</p> */}
                <p className="text-sm">{item.e_member}</p>
              </div>
              <div className=" text-white text-3xl ">
                <div className="hover:text-accent transition-all duration-200">
                  <a href={item.link}>
                    <RxArrowTopRight />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
