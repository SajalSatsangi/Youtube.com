import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className=""
      />

      <from><input type="text" placeholder="Search"/><button type="submit"></button></form>

    </div>
  );
};

export default Header;
