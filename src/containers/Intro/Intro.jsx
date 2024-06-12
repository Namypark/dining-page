import React, { useRef, useState } from "react";
import { meal } from "../../constants/index";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import styles from "./Intro.module.css";

const Intro = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef();

  const handleClick = () => {
    setPlay((prevPlay) => !prevPlay);

    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    return vidRef;
  };
  return (
    <div className={`${styles.intro}`}>
      <video
        src={meal}
        controls={false}
        ref={vidRef}
        type="video/mp4"
        loop
        muted
      />
      <div className={`${styles.intro_video_overlay} flex__center`}>
        <div
          className={`${styles.intro_video_overlay_circle} flex__center`}
          onClick={handleClick}
        >
          {play ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
