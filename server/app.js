const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("Working - Backend!");
});

app.post("/tasks", async (req, res) => {
  try {
    const { description } = req.body;
    console.log(description);
    const newTask = await pool.query(
      "INSERT INTO task (description) VALUEs($1) RETURNING *",
      [description]
    );
    res.json(newTask.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// app.get("", (req, res) => {
//   try {
//     res.send();
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.get("/:id", (req, res) => {
//   try {
//     const { id } = req.params;

//     res.send();
//   } catch (error) {
//     console.error(error.message);
//   }
// });

app.listen(port, () => {
  console.log(`Node server is running on ${port}`);
});
