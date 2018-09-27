const express = require('express');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'food_data.json');

const { report: { foods } } = require(DATA_DIR);


const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

// Determine if food meets all criteria
const isValidFood = (food, spec) => {
  const { nutrients } = food;
  // Iterate through current food nutrients
  for (let i = 0; i < nutrients.length; i++) {
    const { nutrient_id, gm } = nutrients[i];
    // if nutrient is defined in specifications
    if (spec[nutrient_id]) {
      const [min, max] = spec[nutrient_id].split('-').map(str => +str);
      // if gm is out of range of given specs
      if (min > gm || gm > max) {
        // remove food from list
        return false;
      }
    }
  }
  return true;
};

app.get('/food', (req, res) => {
  const results = foods.filter(foodObj => isValidFood(foodObj, req.query));
  res.end(JSON.stringify(results));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
