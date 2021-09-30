import "./App.css";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Restaurent from "./components/Restaurent/Restaurent";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";

function App() {
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
  // handle error
  return (
    <div className="App">
      <Router>
        <Header handleSearch={handleSearch}></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/restaurent">
            <Restaurent meals={meals}></Restaurent>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
