const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const {sequelize, connect} = require('./database/sequelize')

// Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

// All endpoints go here
app.get('/test/', async (req, res) => {
  let data = await sequelize.query('SELECT * FROM test')
  res.status(200).send(data)
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


sequelize.connect

//connection to port
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));