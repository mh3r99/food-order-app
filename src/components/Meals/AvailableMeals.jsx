import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect } from "react";
import { useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const res = await fetch(
      `https://food-order-81aa1-default-rtdb.europe-west1.firebasedatabase.app/meals.json`
    );
    const data = await res.json();

    const loadedMeals = [];

    for (const key in data) {
      loadedMeals.push({ id: key, ...data[key] });
    }

    setMeals(loadedMeals);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} {...meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
