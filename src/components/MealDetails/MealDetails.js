import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const loadMeal = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMeal(data.meals[0]);
    };
    loadMeal();
  }, [mealId]);
  const { strMeal, strInstructions, strMealThumb, strYoutube } = meal;
  return (
    <Container
      sx={{
        p: 4,
        bgColor: "#f1faee",
        textAlign: "center",
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 4,
        boxShadow: 2,
      }}
    >
      <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={1} sm={1} md={1}>
          <Card sx={{ maxWidth: "80%", margin: "auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image={strMealThumb}
                alt={strMeal}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography
                  sx={{ marginBottom: 2 }}
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  {strMeal}
                </Typography>
                <Typography variant="body1" color="primary.text">
                  {strInstructions}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", padding: "30px 0" }}>
              <Button
                href={strYoutube}
                target="_blank"
                color="error"
                variant="contained"
              >
                View Tutorial
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MealDetails;
