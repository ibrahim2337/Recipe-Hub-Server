const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const recipes = require("./data/recipe.json")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
