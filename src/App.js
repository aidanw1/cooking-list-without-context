import React, { useState } from "react";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    //Give me all the recipes that isnt the recipe of the id passed in
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div className="App">
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete} />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1.45",
    instructions: "1. Put salt on chicken\n2. Put chicken in oven \n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven \n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];
export default App;
