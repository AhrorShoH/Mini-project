import React from "react";
import "./nav.css";
import { Nav, NavItem } from "reactstrap";
import { IoHome } from "react-icons/io5";
import { RiTimerFlashFill } from "react-icons/ri";
import { FaSortNumericUpAlt, FaCalculator } from "react-icons/fa";
import { Link } from "react-router-dom";
import Photo from "../pictures/myphoto.jpg";

function Navbar() {
  return (
    <div className="nav">
      <img src={Photo} alt="Myphoto" id="myphoto" />
      <div>
          <Nav className="navbar">
                <NavItem>
                  <Link active to="/" id="home">
                  <IoHome/> <br/>
                    Home
                    <hr/>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/timer" id="timer">
                    <RiTimerFlashFill/> <br/>
                    Timer
                    <hr/>
                  </Link>
                </NavItem>
                <NavItem>
                    <Link id="counter" to="/counter">
                    <FaSortNumericUpAlt/> <br/>
                      Counter
                      <hr/>
                      </Link>
                </NavItem>
                <NavItem>
                    <Link id="calculator" to="/calculator">
                      <FaCalculator/> <br/>
                      Calculator
                      <hr id="hr"/>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link id="contact" to="/about">
                      Contact
                    </Link>
                </NavItem>
          </Nav>
        </div>
    </div>
  );
}

export default Navbar;
