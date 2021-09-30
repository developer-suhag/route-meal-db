import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Meal from "../Meal/Meal";

const Restaurent = (props) => {
  const { meals } = props;
  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {meals.map((meal) => (
            <Grid item xs={2} sm={4} md={4} lg={4}>
              <Meal key={meal.idMeal} meal={meal}></Meal>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Restaurent;
