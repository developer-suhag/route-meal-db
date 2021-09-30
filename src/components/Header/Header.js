import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import TextField from "@mui/material/TextField";
import Restaurent from "../Restaurent/Restaurent";

const Header = () => {
  // load data
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const loadMeals = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMeals(data.meals);
    };
    loadMeals();
  }, [searchText]);

  // handle search
  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

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
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">About</a>
        </div>
      </div>
      <div className="restaurent">
        <Restaurent meals={meals}></Restaurent>
      </div>
    </div>
  );
};

export default Header;
