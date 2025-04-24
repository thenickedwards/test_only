import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return (
    < >
      <RecipeList recipes={sampleRecipes}/>
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: '1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'salt',
        amount: 'a pinch'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    cookTime: '0:45',
    servings: 5,
    instructions: '1. Put salt on Pork\n2. Put Pork in oven\n3. Eat Pork',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'paprika',
        amount: 'a bunch'
      }
    ]
  },
]

export default App;
