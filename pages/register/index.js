import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";


const Contact = () => {
  return (
    <div className="h-full bg-slate-700 ">
      <div className=" container mx-auto py-28 text-center xl:text-left flex items-center jusrify-center h-full ">
        <div className="flex flex-col w-full max-w-[700px] ">
          <h2 className=" p-2 pb-1 text-white text-[20px]">
            Register for <span className="text-accent text-xl font-extrabold">Azure Odyssey</span>
          </h2>
          <h3 className=" pt-0 pl-2 pr-2 pb-0 text-white text-sm">
            Heyy there!! we at EESA are organizing a very interactive workshop on <span className=" text-accent text-lg font-bold">Azure</span> lead by....{" "}
            <span className=" text-accent text-lg font-bold"> Mr. Vedant Patil </span>a
            Microsoft Student Ambassador. <a className="text-blue-400 text-lg" href="https://www.linkedin.com/in/vedant-patil-6082/">Linkedin</a>{" "}
          </h3>
          <h4 className="pt-1 pl-2 pr-2 pb-2 text-white text-xs font-bold text-[20px]">
           Date : <span className="text-accent">7th March 2024</span> | Time : <span className="text-accent">4:00-5:30</span> | Location : <span className="text-accent">CC02</span>
          </h4>

          <form
            id="survey-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdrR-HAmjzPVbFFoTuHKfy8WCMBZ0yu_psVNO1NLd1ddhEiqw/formResponse"
            method="post"
            className=" lowercase bg-primary/30 rounded-lg text-white"
          >
            <div className="flex p-2">
              <input
                type="text"
                required
                placeholder="full name"
                className="input p-2 text-white-500"
                name="entry.1411527844"
              ></input>{" "}
            </div>
            <div className="flex p-2">
              <input
                type="text"
                required
                placeholder="Email (VIT only)"
                className="input p-2 text-white-500"
                name="entry.1030762046"
              ></input>{" "}
            </div>
            <div className="flex p-2 ">
              <select
                name="Branch"
                id="Branch"
                required
                placeholder="Branch"
                className="input p-2"
                name="entry.2023976054"
              >
<option className="text-black" value="Branch">
                Branch
                </option>
                <option className="text-black" value="CMPN">
                  CMPN
                </option>
                <option className="text-black" value="INFT">
                  INFT
                </option>
                <option className="text-black" value="ExCS">
                  ExCS
                </option>
                <option className="text-black" value="ExTC">
                  ExTC
                </option>
                <option className="text-black" value="BIOM">
                  BIOM
                </option>
                <option className="text-black" value="Mtech ">
                  M.Tech
                </option>

              </select>
 <select
                name="Year"
                id="Year"
                placeholder="Year"
                className="input p-2"
                required
                name="entry.359830086"
              >
<option className="text-black" value="*year*">
                 Year
                </option>
                <option className="text-black" value="First">
                  1st
                </option>
                <option className="text-black" value="Second">
                  2nd
                </option>
                <option className="text-black" value="Third">
                  3rd
                </option>
                <option className="text-black" value="Fourth">
                  4th
                </option>
              </select>
            </div>
            

    



            <div className="flex p-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="text-white lowercase input p-2"
                required
                name="entry.1893242125"
              ></input>
            </div>

            <div className="flex justify-center pb-3 pt-1">
              <a href="https://www.linkedin.com/company/eesa-vit/about/">
                <input
                  // type="submit"
                  id="submit"
                  value="Submit"
                  href="https://www.linkedin.com/company/eesa-vit/about/"
                  onclick="location.href = 'https://www.linkedin.com/company/eesa-vit/about/';"
                  className="text-white h-10 w-40 rounded-lg  flex justify-center cursor-not-allowed font-bold cursor-pointer hover:text-accent  bg-accent/20 "
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
