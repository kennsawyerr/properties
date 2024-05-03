import { useState } from "react";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { FaArrowAltCircleUp } from "react-icons/fa";
useState;

//animation

import "aos/dist/aos.css";

const CircularSlide = (props) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  /* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
  const herotext = props.herotext;
  console.log(herotext);

  const handleAnimationEnd = () => {
    setAnimationCompleted(true);
  };

  return (
    <>
      <div className="black-contain" onAnimationEnd={handleAnimationEnd}>
        <div className="circle">
          <FaArrowAltCircleUp />
        </div>
        {animationCompleted && (
          <div className="others">
            <div className="down-arrow">
              <HiOutlineArrowDown />
            </div>
            <div className="text">
              <p>{herotext}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CircularSlide;
