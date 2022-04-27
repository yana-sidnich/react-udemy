import react from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummery from "./MealsSummery";

const Meals = () => {
  return (
    <react.Fragment>
      <MealsSummery></MealsSummery>
      <AvailableMeals></AvailableMeals>
    </react.Fragment>
  );
};

export default Meals;
