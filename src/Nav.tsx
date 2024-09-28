import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false)
    })
    // return () => {
    //   window.removeEventListener("scroll")
    // }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://th.bing.com/th/id/R.a1f673e7df715f16dae49f4874009082?rik=1oW0xBGxcarNqw&pid=ImgRaw&r=0"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://th.bing.com/th/id/R.96454dd560e5715da3402abef4b4fbfb?rik=KUxXdEstFihxQg&pid=ImgRaw&r=0"
        alt="Avatar Logo"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
