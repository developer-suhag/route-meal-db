import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {strInstructions.slice(0, 80)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" color="secondary">
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Meal;
