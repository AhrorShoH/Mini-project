import React from "react";
import "./nav.css";
import { Nav, NavItem } from "reactstrap";
import { IoHome } from "react-icons/io5";
import { BsGithub, BsLinkedin, BsFacebook, BsTelegram } from "react-icons/bs";
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
          </Nav>
          <div className="contact">
            <a href="https://github.com/ahrorbek-umrzoqov" target="blank">
            <BsGithub id="github"/>
            </a>
            <a href="https://linkedin.com/in/umirzakoff-shax" target="blank">
            <BsLinkedin id="linkedin"/>
            </a>
            <a href="https://facebook.com/Umirzakoff.Shax" target="blank">
            <BsFacebook id="facebook"/>
            </a>
            <a href="https:/t.me/Umirzakoff_ShaX" target="blank">
            <BsTelegram id="telegram"/>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
