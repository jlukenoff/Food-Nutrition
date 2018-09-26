import foodData from './food_data.json';

foodData = JSON.parse(foodData).report.foods;

const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/food', (req, res) => {

});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
