import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <img
          onClick={() => history("/")}
          className='nav__logo'
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history("/profile")}
          className='nav__avatar'
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
