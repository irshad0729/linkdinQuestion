import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BiMinus } from "react-icons/bi";
import { workData } from "../pages/utills/data";
import { navLink } from "../pages/utills/data";

const Work = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mt-24 hidden lg:flex list-none justify-between border-[0.5px] border-y-gray-400 py-6 px-20 cursor-pointer text-[12px]  ">
        {navLink.map((link, index) => (
          <li className="text-gray-400 hover:text-gray-800" key={index}>
            {link.name}
          </li>
        ))}
      </div>
      <div className="mt-24 flex lg:hidden  justify-between items-center border-[0.5px] border-y-gray-400 py-6 px-8 cursor-pointer text-[12px]  ">
        <span>ALL WORK</span>
        {show ? (
          <BiMinus onClick={() => setShow(false)} size={24} />
        ) : (
          <IoMdAdd onClick={() => setShow(true)} size={24} />
        )}
      </div>
      {show && (
        <div className="absolute bg-white w-full flex flex-col lg:hidden  justify-start gap-4 border-[0.5px] border-y-gray-400 py-4 px-8 cursor-pointer text-[12px]  list-none">
          {navLink.map((link, index) => (
            <li className="text-gray-400 hover:text-gray-800" key={index}>
              {link.name}
            </li>
          ))}
        </div>
      )}

      <div className="flex flex-wrap w-screen justify-center gap-8  px-4 py-8 mx-auto">
        {workData.map((data, index) => (
          <img src={data.img} className="w-full md:w-[40vw]" key={index} />
        ))}
      </div>
    </>
  );
};

export default Work;
