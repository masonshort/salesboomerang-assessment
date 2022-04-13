const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const jsonObj = require('../colors.json');

app.get('/', (req, res) => {
  res.send(JSON.stringify(jsonObj));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
