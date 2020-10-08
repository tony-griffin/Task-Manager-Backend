const express = require("express");
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

app.get("", (req, res) => {
  res.send("HEY HEY HEY!");
});

app.get("", (req, res) => {
  try {
    res.send();
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const retrievedTask = window.localStorage.getItem(id);

    res.send();
  } catch (error) {
    console.error(error.message);
  }
});

app.post("", (req, res) => {
  try {
    const { description } = req.body;
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Node server is running on ${port}`);
});
