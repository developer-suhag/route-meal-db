import logo from "../../images/logo.png";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

const Header = (props) => {
  const { handleSearch } = props;
  return (
    <Container>
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
    </Container>
  );
};

export default Header;
