import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg"
          alt="hello"
        />
        <span>05:43</span>
      </div>
      <div className="video__title">
        Create app in 5 minutes #made by Chintu
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/yyDlpEgA7Av6FL6XAUak505u-qQ__ZZXFoFedmSh7POpxhOXcbo7lKnScBEkkcD4RVmMsELXsOE=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
};

export default Video;
