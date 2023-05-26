const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const foods = require('./data/foods.json');
const recipes = require('./data/recipes.json');
const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs.find(c=>c.id === id)
    res.send(selectedChef);
})

app.get('/foods', (req, res) => {
    res.send(foods);
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});