//
// Hello EESA tech head for 24-25!!!!
//
// I have wasted a LOT of time on it soooo just add no of hours spent on the code.
//
// NO OF HOURS WASTED = 56 hrs (last updated by : Harsh Jain)
//
import Image from "next/image";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import ParticlesContainer from "../components/ParticlesContainer-m";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
// import { VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-blue-950 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 z-20"
          >
            // {/* <span className="text-4xl font-semibold xl:font-bold text-white"><span className="text-accent">&lt;EESA-VIT/&gt;   {" "} </span>presents</span>{"   "} */}
            <span className="text-accent font-black text-3xl xl:text-5xl z-">
              {"//"}{" "}&lt;Electronics and Computer Science/&gt;{" "}//
            </span>
             <span className="text-purple-700 font-3xl text-bold">&lt;EESA/&gt;{" "}</span>

            <p className="max-w-sm xl:max-w-xl z-50 pt-4 font-semibold text-sm text-white mx-auto xl:mx-0 mb-10 xl:mb-16 ">
              ELECTRONICS AND COMPUTER SCIENCE STUDENTS ASSOCIATION (ECSA) IS A STUDENT COMMITTEE WHICH BELONGS TO THE ELECTRONICS DEPARTMENT OF VIT. ECSA-VIT, IS A STUDENT CHAPTER OF VIDYALANKAR INSTITUTE OF TECHNOLOGY (VIT). IT ACTS AS A PLATFORM OF THE ELECTRONICS ENGINEERING DEPARTMENT TO CONDUCT VARIOUS ACTIVITIES AND HOST EVENTS, TO PUT FORTH INTERESTING AND CREATIVE IDEAS IN THE TECHNICAL FIELD.{" "}
            </p>
            <div className="flex sm:pl-2 cursor-pointer text-lg font-extrabold text-white z-60 ">
              <div
                className="z-50  cursor-pointer justify-center flex items-center rounded-md
                 text-ehite bg-accent 
               hover:border-accent hover:text-accent hover:bg-white 
                 h-[30px] w-[300px] items-center"
              >
                <a href="https://hkt24.vercel.app/">&lt;!--Register for Hackatronics--&gt;</a>
              </div>
            </div>
          </motion.h1>
          {/* <motion.p
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl z-50 font-bold text-white mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            loremAd adipisicing nulla duis anim anim. Minim laborum ipsum
            eiusmod reprehenderit Lorem incididunt qui irure irure non
            incididunt nostrud deserunt. Adipisicing qui quis sint veniam
            commodo ex dolore nulla aliqua sunt excepteur tempor in. Aliquip
            deserunt amet do culpa duis aliqua ea eu proident laborum.{" "}
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" z-10  cursor-pointer  pt-4"
            >
              <ProjectsBtn />
            </motion.div>
          </motion.p> */}
          {/* <div className="bg-indigo-200 h-[30px] flex rounded-lg w-[350px] items-center z-50">
            <div className="font-bold text-white pl-4">
              Developed and managed by{" "}
              <span className="text-accent font-extrabold">Harsh Jain</span>
            </div>
          </div> */}
          {/* counter */}
        </div>
        {/* image from now on */}
      </div>
      <div className="w-[1200px] xl:w-full h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" bg-none xl:bg-cover xl:bg-right mix-blend-color-dodge xl:bg-no-repeat w-full h-full absolute translate-z-0     "
        ></motion.div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-100 h-full  max-w-[700px] max-h-[600px] absolute -bottom-40 lg:bottom-14 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
