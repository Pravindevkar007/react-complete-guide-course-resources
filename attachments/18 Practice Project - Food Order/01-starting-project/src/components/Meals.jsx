import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  //   const [loaderMeals, setLoaderMeals] = useState();

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  //   useEffect(() => {
  //     async function fetchMeals() {
  //       const response = await fetch("http://localhost:3000/meals");
  //       //   console.log(response);
  //       if (!response.ok) {
  //       }

  //       const meals = await response.json();
  //       //   console.log(meals);

  //       setLoaderMeals(meals);
  //     }
  //     fetchMeals();
  //   }, []);
  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
