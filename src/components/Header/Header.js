import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import TextField from "@mui/material/TextField";
import Restaurent from "../Restaurent/Restaurent";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { handleSearch } = props;
  return (
    <div>
      <div bgColor="primary.main" className="nav-bar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="search-field">
          <TextField
            label="Search your meal "
            color="success"
            onChange={handleSearch}
            type="danger"
            name=""
          />
        </div>
        <div className="menu">
          <NavLink to="/home" activeClassName="selected" className="menu-item">
            Home
          </NavLink>
          <NavLink
            to="/restaurent"
            activeClassName="selected"
            className="menu-item"
          >
            Restaurent
          </NavLink>
          <NavLink to="/about" activeClassName="selected" className="menu-item">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
