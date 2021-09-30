import { Button, Container, Typography } from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import restaurent from "../../images/restaurent.jpg";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/restaurent");
  };
  return (
    <Container className="restaurent" sx={{ justifyContent: "center" }}>
      <Typography
        sx={{
          textAlign: "center",
          width: 600,
          bgcolor: "rgb(237 224 212 / 52%)",
          p: 1,
          margin: "auto",
          fontWeight: 500,
          borderRadius: 2,
        }}
        variant="h4"
        color="primary.text"
      >
        Welcome to Our Restaurent
      </Typography>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button onClick={handleClick} color="error" variant="contained">
          See al meals
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
