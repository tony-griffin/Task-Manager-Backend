const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("Working - Backend!");
});

// Create a task
app.post("/tasks", async (req, res) => {
  try {
    const { description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO task (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTask.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Get a task
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    console.error(error);
  }
});

// Get all tasks
app.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM task WHERE task_id = $1", [
      id,
    ]);
    res.json(task.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTask = await pool.query(
      "UPDATE task SET description = $1 WHERE task_id = $2",
      [description, id]
    );
    res.json(`Task ${id} has been updated!`);
  } catch (error) {
    console.error(error.message);
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM task WHERE task_id = $1", [
      id,
    ]);
    res.json(`Task ${id} has been deleted!`);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Node server is running on ${port}`);
});
